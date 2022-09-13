//const useEffect = React.useEffect
//const useState = React.useState
const { useEffect, useState } = React // destructuring

function SettingsPage(props) {
    logger.debug('SettingsPage')

    const [user, setUser] = useState()

    useEffect(() => {
        logger.debug('SettingsPage -> useEffect')

        try {
            const user = retrieveUser(sessionStorage.userId)

            setUser(user)
        } catch {
            alert(error.message)
        }
    }, [])

    const handleSubmitName = function (event) {
        logger.debug('SettingsPage -> handleSubmitName')

        event.preventDefault()

        const nameInput = event.target.name
        const name = nameInput.value

        try {
            updateName(sessionStorage.userId, name)

            alert('name has been changed')
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSubmitEmail = function (event) {
        logger.debug('SettingsPage -> handleSubmitEmail')

        event.preventDefault()

        const emailInput = event.target.email
        const email = emailInput.value


        try {
            updateEmail(sessionStorage.userId, email)

            alert('email has been changed')
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSubmitPassword = function (event) {
        logger.debug('SettingsPage -> handleSubmitPassword')

        event.preventDefault()

        const oldPasswordInput = event.target.oldPassword
        const oldPassword = oldPasswordInput.value
        const newPasswordInput = event.target.newPassword
        const newPassword = newPasswordInput.value
        const newPasswordRepeatInput = event.target.newPasswordRepeat
        const newPasswordRepeat = newPasswordRepeatInput.value

        try {
            updatePassword(sessionStorage.userId, oldPassword, newPassword, newPasswordRepeat)

            alert('password has been changed')
        } catch (error) {
            alert(error.message)
        }
    }
    const handleLogout = event =>{
        delete sessionStorage.userId

        props.onLoggedOut()
    }
    
    return <div className="home-page__settings-panel">
        <header className="home-page__header">
            <button className="home-page__settings-button">notes</button>
            <button className="home-page__logout-button" onClick={handleLogout}>logout</button>
        </header>
        <main>

            <fieldset className="form">
                <legend>Update name</legend>
                <form action="" className="name-form" onSubmit={handleSubmitName}>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" defaultValue={user?.name} />
                    <button>Save</button>
                </form>
            </fieldset>

            <fieldset className="form">
                <legend>Update e-mail</legend>
                <form action="" className="email-form" onSubmit={handleSubmitEmail}>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" defaultValue={user?.email} />
                    <button>Save</button>
                </form>
            </fieldset>

            <form action="" className="password-form" onSubmit={handleSubmitPassword}>
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
        </main>
    </div>
}