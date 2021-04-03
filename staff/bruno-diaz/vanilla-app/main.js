var backofficeForm = createBackofficeForm(
    function (fullname, email, password) {
        try {
            registerUser(fullname, email, password, function(feedback) {
                if (feedback === null) {
                    authenticateUser(email, password, function(feedback, token) {
                        if (feedback === null) {
                            sessionStorage.token = token
                            retrieveUser(sessionStorage.token, function(feedback, user) {
                                if (feedback === null) {
                                    sessionStorage.fullname = user.fullname
                                    sessionStorage.email = user.username
                                    var userNameWrapper = welcome.querySelector('.acountDropdown__name')
                                    userNameWrapper.innerText = sessionStorage.fullname
                                    bimmerViews()
                                }
                            })
                        } else {
                            var feedbackWrapper = backofficeForm.querySelector('.form__feedback')
                            feedbackWrapper.innerText = feedback.message
                            feedbackWrapper.style.display = 'block'
                        }
                    })
                } else {
                    var feedbackWrapper = backofficeForm.querySelector('.form__feedback')
                    feedbackWrapper.innerText = feedback.message
                    feedbackWrapper.style.display = 'block'
                }
            })
        } catch(error) {
            var feedbackWrapper = backofficeForm.querySelector('.form__feedback')
            feedbackWrapper.innerText = error.message
            feedbackWrapper.style.display = 'block'
        }
    }, function (email, password) {
        try {
            authenticateUser(email, password, function(feedback, token) {
                if (feedback === null) {
                    sessionStorage.token = token
                    retrieveUser(sessionStorage.token, function(feedback, user) {
                        if (feedback === null) {
                            sessionStorage.fullname = user.fullname
                            sessionStorage.email = user.username
                            var userNameWrapper = welcome.querySelector('.acountDropdown__name')
                            userNameWrapper.innerText = sessionStorage.fullname
                            bimmerViews()
                        }
                    })
                } else {
                    var feedbackWrapper = backofficeForm.querySelector('.form__feedback')
                    feedbackWrapper.innerText = feedback.message
                    feedbackWrapper.style.display = 'block'
                }
            })
        } catch(error) {
            var feedbackWrapper = backofficeForm.querySelector('.form__feedback')
            feedbackWrapper.innerText = error.message
            feedbackWrapper.style.display = 'block'
        }
    }, function () {
        document.querySelector('.switchButtons__link--active').classList.remove('switchButtons__link--active')

        backofficeForm.querySelector('.form__feedback').style.display = 'none'

        var forms = document.querySelectorAll('.form')

        var links = document.querySelectorAll('.switchButtons__link')

        if (forms[1].style.display === 'flex') {
            links[0].classList.add('switchButtons__link--active')
            document.getElementById('registerForm').style.display = 'flex'
            document.getElementById('loginForm').style.display = 'none'
        } else {
            links[1].classList.add('switchButtons__link--active')
            document.getElementById('registerForm').style.display = 'none'
            document.getElementById('loginForm').style.display = 'flex'
        }
    }
)
document.body.append(backofficeForm)

var editProfile

var welcome = createWelcome(
    // onEditProfile
    function() {
        editProfile = createEditProfile(
            // onEditProfile
            function() {
                welcome.style.display = 'none'
                editProfile.style.display = 'block'
            },
            // onLogout
            function() { 
                var menuDropdownOpened = document.querySelector('.acountDropdown__menu--opened')
                menuDropdownOpened.classList.remove('.acountDropdown__menu--opened')
                
                // sessionStorage.clear()  ???
                sessionStorage.removeItem("token")
                sessionStorage.removeItem("fullname")
                sessionStorage.removeItem("email")
        
                bimmerViews()
            }
        )
        document.body.append(editProfile)
        welcome.style.display = 'none'
    },
    // onLogout
    function() { 
        var menuOpened = welcome.querySelector('.acountDropdown__menu--opened')
        menuOpened.classList.remove('.acountDropdown__menu--opened')
        
        // sessionStorage.clear()  ???
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("fullname")

        bimmerViews()
    },
    // onSearch
    function searchByQuery(searcher, query, page) {
        
            setLoading('start')

            if (!page) page = 1

            // TODO move to component
            if (!document.querySelector('.searchComponent--used'))
                document.getElementById('searchComponent').classList.add('searchComponent--used')

            switch (searcher) {
                case 'google':
                    searchInGoogle(query, page, function(searchResults, page) {
                        setLoading('stop')
                        createResults(searchResults, page, function(page) {
                            searchByQuery(searcher, query, page)
                        })
                    })
                    break
                case 'yahoo':
                    searchInYahoo(query, page, function(searchResults, page) {
                        setLoading('stop')
                        createResults(searchResults, page, function(page) {
                            searchByQuery(searcher, query, page)
                        })
                    })
                    break
                case 'bing':
                    searchInBing(query, page, function(searchResults, page) {
                        setLoading('stop')
                        createResults(searchResults, page, function(page) {
                            searchByQuery(searcher, query, page)
                        })
                    })
                    break
                default:
                    searchInAll(query, page, function(searchResults, page) {
                        setLoading('stop')
                        createResults(searchResults, page, function(page) {
                            searchByQuery(searcher, query, page)
                        })
                    })
                    break
            }
    }
)
document.body.append(welcome)




function bimmerViews() {
    if (sessionStorage.token) {
        backofficeForm.style.display = 'none'
        welcome.style.display = 'block'
    } else {
        backofficeForm.style.display = 'block'
        welcome.style.display = 'none'
        if (editProfile)
            editProfile.style.display = 'none'
    }
}

bimmerViews()

function logout() { 
    var menuDropdownOpened = document.querySelector('.acountDropdown__menu--opened')
    menuDropdownOpened.classList.remove('.acountDropdown__menu--opened')
    
    // sessionStorage.clear()  ???
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("fullname")

    bimmerViews()
}