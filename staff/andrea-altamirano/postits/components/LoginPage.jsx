function LoginPage(props) {
    logger.debug('LoginPage -> render')

    const handleSubmit = function (event) {
        event.preventDefault()

        const emailInput = event.target.email
        const passwordInput = event.target.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            userId = authenticateUser(email, password)

            logger.debug(`LoginPage -> authenticaterUser(${email}, ${password})`)

            props.onLoggedIn()
        } catch (error) {
            alert(error.message)

            passwordInput.value = ''

            logger.warn(`LoginPage -> authenticateUser error: ${error}`)
        }
    }

    const handleLinkClick = event => {
        event.preventDefault()

        props.onGoToRegister()

        logger.debug('LoginPage -> link click')
    }

    return <main className="login-page container container--padding container--bordered container--full container--centered">
        <form action="" className="form" onSubmit={handleSubmit}>
            <label for="login-page__email-input">e-mail</label>
            <input type="email" name="email" id="login-page__email-input" />

            <label for="login-page__password-input">password</label>
            <input type="password" name="password" id="login-page__password-input" />

            <button>Login</button>
        </form>

        <a href="" onClick={handleLinkClick}>Register</a>
    </main>
}
