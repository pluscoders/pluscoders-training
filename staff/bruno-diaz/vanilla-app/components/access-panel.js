class AccessPanel extends HTMLElement {
    constructor() {
        super()

        this.onSubmit = function() {}
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="tabsElement switchButtons">
                <tab-element text="Register"></tab-element>
                <tab-element text="Log in"></tab-element>
            </div>

            <div class="accessPanel__form">
                <span class="form__feedback"></span>

                <form id="registerForm" class="form">
                    <input-form label='Full name' type='text' name='fullname'></input-form>
                    <input-form label='E-mail' type='email' name='email'></input-form>
                    <input-form label="Password" type="password" name="password"></input-form>
                    
                    <button id="registerSubmit" class="form__button form__button--submit" type="submit">Register</button>
                </form>

                <form id="loginForm" class="form">
                    <input-form label='E-mail' type='email' name='email'></input-form>
                    <input-form label="Password" type="password" name="password"></input-form>

                    <button id="loginSubmit" class="form__button form__button--submit" type="submit">Log in</button>
                </form>
            </div>
        `

        this.classList.add('accessPanel')

        var registerForm = this.querySelector('#registerForm')

        registerForm.onsubmit = function (event) {
            this.onSubmit(event)
        }.bind(this)

        var loginForm = this.querySelector('#loginForm')

        loginForm.onsubmit = function (event) {
            this.onSubmit(event)
        }.bind(this) 

        var tabs = this.querySelectorAll('tab-element')
        var forms = this.querySelectorAll('.form')

        for (var i = 0; i < tabs.length; i++) forms[i].style.display = 'none'

        tabs[0].querySelector('.switchButtons__link').classList.add('switchButtons__link--active')
        forms[0].style.display = 'flex'

        for (var i = 0; i < tabs.length; i++) {           
            tabs[i].addEventListener('click', function(event) {
                this.querySelector('.switchButtons__link--active').classList.remove('switchButtons__link--active')

                var formFeedback = this.querySelector('.form__feedback')

                if (formFeedback)
                    formFeedback.style.display = 'none'
            
                for (var i = 0; i < forms.length; i++) 
                    forms[i].style.display = 'none'
    
                if (event.target.id === 'registerTab')
                    var form = document.getElementById('registerForm')
                else if (event.target.id === 'loginTab')
                    var form = document.getElementById('loginForm')
    
                if (form)
                    form.style.display = 'flex'
            }.bind(this), true)
        } 
    }
}
customElements.define('access-panel', AccessPanel)