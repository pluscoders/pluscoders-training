function HomePage(props) {
    logger.debug('HomePage -> render')

    const [lastUpdate, setLastUpdate] = useState()

    const handleCreateNote = () => {
        try {
            createNote(sessionStorage.userId)

            setLastUpdate(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSettings = event => {
        props.onSettings()
    }

    const handleLogout = event =>{
        delete sessionStorage.userId

        props.onLoggedOut()
    }

   
    return <div className="w-full h-full bg-cover flex flex-col" style={{ 
        backgroundImage: `url("https://img.blogs.es/anexom/wp-content/uploads/2020/08/pinterest-fondos-1.jpg")` 
      }}>
        <header className="flex space-x-4 w-full justify-between">
            <button className="px-8 h-12 m-8 rounded-md bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded" onClick={handleSettings}>settings</button>
            <button className="px-8 h-12 m-8 rounded-md bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"onClick={handleLogout} >logout</button>
        </header>
        <main className="w-full h-full">
            <NoteList lastUpdate={lastUpdate} />
        </main>
        <footer className="home-page__footer">
            <button className="add-note" onClick={handleCreateNote}>+</button>
        </footer>
    </div>
}