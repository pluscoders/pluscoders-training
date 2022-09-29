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
    const handleLogout = event => {
        delete sessionStorage.userId

        props.onLoggedOut()
    }

    return <div className="flex flex-col h-full bg-gradient-to-r from-blue-900 to-slate-400 ">
        <header className="flex justify-between item-center m-6">
            <button className="h-12 rounded-md bg-transparent hover:bg-slate-400 text-white font-semibold hover:text-blue-900 py-2 px-4 border border-white hover:border-transparent rounded">notes</button>
            <h1 className="text-2xl font-bold text-red-200 self-center">SETTINGS</h1>
            <button className="h-12 rounded-md bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded" onClick={handleLogout}>logout</button>
        </header>
        <main className="h-full w-full flex flex-col justify-center items-center" >
    

            <form action="" className="mb-8" onSubmit={handleSubmitName}>
                <fieldset className="flex flex-col">
                    <legend className="text-xl font-bold text-red-200 mb-4">Update name</legend>
                    <label className="text-xl text-neutral-100" for="name">Name</label>
                    <input className="rounded-md border h-12" type="text" name="name" id="name" defaultValue={user?.name} />
                    <button className="px-8 h-12 m-6 rounded-md bg-transparent hover:bg-slate-400 text-white font-semibold hover:text-blue-900 py-2 px-4 border border-white hover:border-transparent rounded mt-4">Save</button>
                </fieldset>
            </form>

            <form action="" className="mb-8" onSubmit={handleSubmitEmail}>
                <fieldset className="flex flex-col">
                    <legend className="text-xl font-bold text-red-200 mb-4">Update e-mail</legend>
                    <label className="text-xl text-neutral-100" for="email">E-mail</label>
                    <input className="rounded-md border h-12" type="email" name="email" id="email" defaultValue={user?.email} />
                    <button className="px-8 h-12 m-6 rounded-md bg-transparent hover:bg-slate-400 text-white font-semibold hover:text-blue-900 py-2 px-4 border border-white hover:border-transparent rounded mt-4">Save</button>
                </fieldset>
            </form>

            <form action="flex" className="mb-8" onSubmit={handleSubmitPassword}>
                <fieldset className="flex flex-col justify-center">
                    <legend className="text-xl font-bold text-red-200 mb-4">Update password</legend>
                    <label className="text-xl text-neutral-100" for="oldPassword">Old password</label>
                    <input className="rounded-md border h-12" type="password" name="oldPassword" id="oldPassword" />
                    <label className="text-xl text-neutral-100" for="newPassword">New password</label>
                    <input className="rounded-md border h-12" type="password" name="newPassword" id="newPassword" />
                    <label className="text-xl text-neutral-100" for="newPasswordRepeat">New password</label>
                    <input className="rounded-md border h-12" type="password" name="newPasswordRepeat" id="newPasswordRepeat" />
                    <button className="px-8 h-12 m-6 rounded-md bg-transparent hover:bg-slate-400 text-white font-semibold hover:text-blue-900 py-2 px-4 border border-white hover:border-transparent rounded mt-4">Save</button>
                </fieldset>
            </form>
        </main>
    </div>
}