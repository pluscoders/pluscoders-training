function HomePage() {
    logger.debug('HomePage -> render')

    const [lastUpdate, setLastUpdate] = useState()

    const handleCreateNote = () => {
        try {
            createNote(userId)

            setLastUpdate(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-page container container--bordered container--full container--centered">
        <header className="home-page__header">
            <button className="home-page__settings-button">settings</button>
            <button className="home-page__logout-button">logout</button>
        </header>
        <main className="home-page__main container container--borderedn container--scroll">
            <NoteList lastUpdate={lastUpdate} />

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
            <button className="add-note" onClick={handleCreateNote}>+</button>
        </footer>
    </div>
}