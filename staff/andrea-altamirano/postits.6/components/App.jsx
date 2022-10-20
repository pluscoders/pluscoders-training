const useState = React.useState

function App() {
    const [view, setView] = useState('login')

    const handleLoggedIn = () => {
        setView('home')
    }

    const handleGoToRegister = () => {
        setView('register')
    }
    const handleRegistered = () => {
        setView('login')
    }

    const handleGoToLogin= ()=>{
        setView('login')
    }

    if (view === 'login')
        return <LoginPage onLoggedIn={handleLoggedIn} onGoToRegister={handleGoToRegister} />
    else if (view === 'register')
        return <RegisterPage onRegistered={handleRegistered} onGoToLogin={handleGoToLogin} />
    else if (view === 'home')
        return <HomePage />
}