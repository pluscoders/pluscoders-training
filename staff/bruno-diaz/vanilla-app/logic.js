function registerUser(fullname, email, password) {
    if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a string')
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!regex.test(String(email).toLowerCase())) throw new Error(email + ' is not an e-mail')

    var exists = users.some(function (user) { return user.email === email })

    if (exists) throw new Error('user already exists')

    var user = { fullname: fullname, email: email, password: password }

    users.push(user)
}



function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!regex.test(String(email).toLowerCase())) throw new Error(email + ' is not an e-mail')
    
    var user = users.find(function(user) {
        return user.email === email && user.password === password
    })

    if (!user) throw new Error('We have no user with this email or password')
}



function searchInSearchers(searcher, query, callback) {
    if (typeof query !== 'string') throw new TypeError(query + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var searcherUrl
    
    switch (searcher) {
        case 'google':
            searcherUrl = 'https://www.google.com/search?q='
            break
        case 'yahoo':
            searcherUrl = 'https://es.search.yahoo.com/search?p='
            break
        case 'bing':
            searcherUrl = 'https://www.bing.com/search?q='
            break
    }

    fetch('https://b00tc4mp.herokuapp.com/proxy?url=' + searcherUrl + query)
        .then(function(response) { return response.text() })
        .then(function(html) { 
            
            var parser = new DOMParser

            var doc = parser.parseFromString(html, 'text/html')

            var searchResults = []
            
            var resultsList = []

            var href

            var breadcrumb

            var title

            var preview

            switch (searcher) {
                case 'google':
                    resultsList = doc.querySelectorAll('.hlcw0c > .g')

                    for (var i = 0; i < resultsList.length; i++) {
                        
                        var result = resultsList[i]

                        href = result.querySelector('a').href

                        breadcrumb =  result.querySelector('cite').innerText
                        
                        title = result.querySelector('h3').innerText
                        
                        preview = result.querySelector('span.aCOpRe > span:last-of-type').innerText
                        
                        var searchResult = { title: title, href: href, breadcrumb: breadcrumb, preview: preview }
                        
                        searchResults.push(searchResult)
                    }
                    break
                case 'yahoo':
                    resultsList = doc.querySelectorAll('#web > ol > li > .dd.algo')
                    
                    for (var i = 0; i < resultsList.length; i++) {
                        
                        var result = resultsList[i]
                        
                        url = result.querySelector('a').href

                        breadcrumb =  result.querySelector('.compTitle > div > span:first-child').innerText

                        title = result.querySelector('h3').innerText

                        preview = result.querySelector('.compText > p').innerText

                        var searchResult = { title: title, href: href, breadcrumb: breadcrumb, preview: preview }
                    
                        searchResults.push(searchResult)
                    }
                    break
                case 'bing':
                    console.log('LLEGA A LOGIC 1')
                    resultsList = doc.querySelectorAll('.b_algo')
                    console.log(resultsList)
                    
                    for (var i = 0; i < resultsList.length; i++) {
                        
                        var result = resultsList[i]
                        
                        url = result.querySelector('h2 > a').href

                        breadcrumb =  result.querySelector('cite').innerText

                        title = result.querySelector('h2').innerText

                        preview = result.querySelector('.b_caption > p').innerText

                        var searchResult = { title: title, href: href, breadcrumb: breadcrumb, preview: preview }

                        console.log(preview, searchResult)
                    
                        searchResults.push(searchResult)
                    }
                    break
            }

            callback(searchResults)
        })   
}



// function searchInYahoo(query, callback) {
//     if (typeof query !== 'string') throw new TypeError(query + ' is not a string')
//     if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

//     fetch('https://b00tc4mp.herokuapp.com/proxy?url=' + query)
//     .then(function(response) { return response.text() })
//     .then(function(html) { 
//         var parser = new DOMParser

//         var doc = parser.parseFromString(html, 'text/html')

//         var searchResults = []

//         var resultLists = doc.querySelectorAll('#web > ol > li')
            
//         for (var i = 0; i < resultLists.length - 1; i++) {
//             var result = resultLists[i]
            
//             var a = result.querySelector('a')
            
//             var url = a.href
            
//             var title = a.innerText

//             var preview = result.querySelector('.compText > p').innerText
                        
//             var searchResult = { title: title, url: url, preview: preview }
            
//             searchResults.push(searchResult)
//         }

//         callback(searchResults)    
//     })   
// }