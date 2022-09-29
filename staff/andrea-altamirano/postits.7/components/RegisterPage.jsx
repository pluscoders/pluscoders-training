function RegisterPage(props) {
    logger.debug('RegisterPage -> render')

    const handleSubmit = function (event) {
        event.preventDefault()

        const nameInput = event.target.name
        const emailInput = event.target.email
        const passwordInput = event.target.password

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password)

            logger.debug(`RegisterPage -> registerUser(${name}, ${email}, ${password})`)

            props.onRegistered()
        } catch (error) {
            alert(error.message)

            logger.warn(`RegiserPage -> registerUser error: ${error}`)
        }
    }

    const handleLinkClick = event => {
        event.preventDefault()
            
        props.onGoToLogin()
    
        logger.debug('RegisterPage -> link click')
    }
    
    return <main className="register-page container container--bordered container--full container--centered">
        <form action="" className="form" onSubmit={handleSubmit}>
            <label for="register-page__name-input">name</label>
            <input type="text" name="name" id="register-page__name-input" />

            <label for="register-page__email-input">e-mail</label>
            <input type="email" name="email" id="register-page__email-input" />

            <label for="register-page_password-input">password</label>
            <input type="password" name="password" id="register-page_password-input" />

            <button>Register</button>
        </form>

        <a href="" onClick={handleLinkClick}>Login</a>
    </main>
}