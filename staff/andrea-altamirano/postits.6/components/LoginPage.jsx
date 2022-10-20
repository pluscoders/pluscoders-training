function LoginPage(props) {
    const handleSubmit = function (event) {
        event.preventDefault()

        const emailInput = event.target.email
        const passwordInput = event.target.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            userId = authenticateUser(email, password)

            props.onLoggedIn()
        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }
    }

    const handleLinkClick = event => {
        event.preventDefault()

        props.onGoToRegister()
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
