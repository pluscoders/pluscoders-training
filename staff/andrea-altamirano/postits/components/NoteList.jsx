const useEffect = React.useEffect
const useState = React.useState

function NoteList (props) {
    const [notes, setNotes] = useState([])

    useEffect(() => { // NOTE it runs this callback after component is mounted in the DOM
        try {
            const notes = retrieveNotes(userId)
    
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

    return <ul className="home-page__result-list">
        {notes.map(note => <li>
            <h4>{note.category}</h4>
            <p contentEditable="true" onKeyUp={event =>{
                const text = event.target.innerText

                handleUpdateNote(note.id, text)
            }}>{note.text}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Supr</button>
        </li>)}
    </ul>
} 