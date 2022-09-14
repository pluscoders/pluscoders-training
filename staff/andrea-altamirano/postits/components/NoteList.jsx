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
            deleteNote(userId, noteId)

            const notes = retrieveNotes(userId)
    
            setNotes(notes)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleUpdateNote = (noteId, text) => {
        try {
            updateNote(userId, noteId, text)
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="grid grid-rows-4 grid-flow-col gap-4 justify-center font-sans">
        {notes.map(note => <li>
            <div className="bg-pink-800 border-2 w-64 px-6 pb-6 mb-4 shadow-2xl hover:bg-indigo-900 hover:bg-pink-900 text-neutral-50">

            <h3 className="font-bold text-xl pr-6 pb-6">{note.category}</h3>
            <p contentEditable="true" onKeyUp={event =>{
                const text = event.target.innerText
                
                handleUpdateNote(note.id, text)
            }}>{note.text}</p>
            </div>
            <button onClick={() => handleDeleteNote(note.id)}>Supr</button>
        </li>)}
    </ul>
} 