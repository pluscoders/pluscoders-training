const useEffect = React.useEffect
const useState = React.useState

function NoteList (props) {
    const [notes, setNotes] = useState([])

    useEffect(() => { // NOTE it runs this callback after component is mounted in the DOM
        try {
            const notes = retrieveNotes(sessionStorage.userId)
    
            setNotes(notes)
        } catch(error) {
            alert(error.message)
        }
    }, [props.lastUpdate])

    const handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.userId, noteId)

            const notes = retrieveNotes(sessionStorage.userId)
    
            setNotes(notes)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.userId, noteId, text)
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="w-full grid grid-rows-4 grid-flow-col gap-4 justify-center font-sans">
        {notes.map(note => <li>
            <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">

            <h3 className="font-bold text-xl pr-6 pb-6">{note.category}</h3>
            <p contentEditable="true" onKeyUp={event =>{
                const text = event.target.innerText
                
                handleUpdateNote(note.id, text)
            }}>{note.text}</p>
            </div>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleDeleteNote(note.id)}>Supr</button>
        </li>)}
    </ul>
} 