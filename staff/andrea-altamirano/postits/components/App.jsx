const useState = React.useState

function App() {
    logger.debug('App -> render')

    const [view, setView] = useState('login')

    const handleLoggedIn = () => {
        setView('home')

        logger.debug('App -> setView(home)')
    }

    const handleGoToRegister = () => {
        setView('register')

        logger.debug('App -> setView(register)')
    }
    const handleRegistered = () => {
        setView('login')

        logger.debug('App -> setView(login)')
    }

    const handleGoToLogin= ()=>{
        setView('login')

        logger.debug('App -> setView(login)')
    }

    if (view === 'login')
        return <LoginPage onLoggedIn={handleLoggedIn} onGoToRegister={handleGoToRegister} />
    else if (view === 'register')
        return <RegisterPage onRegistered={handleRegistered} onGoToLogin={handleGoToLogin} />
    else if (view === 'home')
        return <HomePage />
}