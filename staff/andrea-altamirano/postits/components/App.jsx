const useState = React.useState

function App() {
    logger.debug('App')

    const [view, setView] = useState(sessionStorage.userId ? 'home' : 'login')

    const goToHome = () => {
        setView('home')

        logger.debug('App -> goToHome')
    }

    const goToRegister = () => {
        setView('register')

        logger.debug('App -> goToRegister')
    }

    const goToLogin = () => {
        setView('login')

        logger.debug('App -> goToLogin')
    }
    const goToSettings = () => {
        setView('settings')

        logger.debug('App -> goToSettings')
    }

    if (view === 'login')
        return <LoginPage onLoggedIn={goToHome} onGoToRegister={goToRegister} />
    else if (view === 'register')
        return <RegisterPage onRegistered={goToLogin} onGoToLogin={goToLogin} />
    else if (view === 'home')
        return <HomePage onSettings={goToSettings} onLoggedOut= {goToLogin} />
    else if (view === 'settings')
        return <SettingsPage onLoggedOut= {goToLogin} />

}