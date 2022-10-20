let userId

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

function RegisterPage(props) {
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

            alert('user registered')

            props.onRegistered()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLinkClick = event => {
        event.preventDefault()
            
        props.onGoToLogin()
        
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

function HomePage() {
    return <div className="home-page container container--bordered container--full container--centered">
        <header className="home-page__header">
            <button className="home-page__settings-button">settings</button>
            <button className="home-page__logout-button">logout</button>
        </header>
        <main className="home-page__main container container--borderedn container--scroll">
            <ul className="home-page__result-list"></ul>

            <div className="home-page__settings-panel off">
                <fieldset className="form">
                    <legend>Update name</legend>
                    <form action="" className="name-form">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <button>Save</button>
                    </form>
                </fieldset>

                <fieldset className="form">
                    <legend>Update e-mail</legend>
                    <form action="" className="email-form">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" />
                        <button>Save</button>
                    </form>
                </fieldset>

                <form action="" className="password-form">
                    <fieldset className="form ">
                        <legend>Update password</legend>
                        <label for="oldPassword">Old password</label>
                        <input type="password" name="oldPassword" id="oldPassword" />
                        <label for="newPassword">New password</label>
                        <input type="password" name="newPassword" id="newPassword" />
                        <label for="newPasswordRepeat">New password</label>
                        <input type="password" name="newPasswordRepeat" id="newPasswordRepeat" />
                        <button className="save-button">Save</button>
                    </fieldset>
                </form>
            </div>
        </main>
        <footer className="home-page__footer">
            <button className="add-note">+</button>
        </footer>
    </div>
}

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

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
