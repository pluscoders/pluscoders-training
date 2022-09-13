function LoginPage(props) {
    logger.debug('LoginPage')

    const handleSubmit = function (event) {
        event.preventDefault()

        const emailInput = event.target.email
        const passwordInput = event.target.password

        const email = emailInput.value
        const password = passwordInput.value

        try {
            sessionStorage.userId = authenticateUser(email, password)

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

        logger.debug('LoginPage -> handleLinkClickk')
    }

    return <main className="h-full flex flex-col justify-center items-center">
        <form action="" className="flex gap-10" onSubmit={handleSubmit}>
            <label htmlFor="email">e-mail</label>
            <input className="rounded-md border" type="email" name="email" id="email" />

            <label htmlFor="password">password</label>
            <input className="rounded-md border" type="password" name="password" id="password" />
            
            <button className="rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Login</button>
        </form>

        <a className="underline" href="" onClick={handleLinkClick}>Register</a>
    </main>
}
