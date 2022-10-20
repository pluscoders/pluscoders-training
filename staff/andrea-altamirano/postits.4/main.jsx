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

            event.target.reset()

            props.onLoggedIn()
        } catch (error) {
            alert(error.message)

            passwordInput.value = ''
        }
    }

    return <main className="login-page container container--padding container--bordered container--full container--centered">
        <form action="" className="form" onSubmit={handleSubmit}>
            <label for="login-page__email-input">e-mail</label>
            <input type="email" name="email" id="login-page__email-input" />

            <label for="login-page__password-input">password</label>
            <input type="password" name="password" id="login-page__password-input" />

            <button>Login</button>
        </form>

        <a href="">Register</a>
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
    //const viewState = useState('login')

    //const view = viewState[0]
    //const setView = viewState[1]

    //const [view, setView] = viewState

    const [view, setView] = useState('login')

    const handleLoggedIn = () => {
        //view = 'home' // NOPE!!
        setView('home') // YES!!!
    }

    if (view === 'login')
        return <LoginPage onLoggedIn={handleLoggedIn} />
    else if (view === 'home')
        return <HomePage />
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
