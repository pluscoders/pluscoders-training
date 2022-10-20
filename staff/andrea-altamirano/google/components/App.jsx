const useState = React.useState

function App() {
    const [view, setView] = useState('home')
    const [results, setResults] = useState([])

    const goToSearchPage = results => {
        setResults(results)
        setView('search')

    }

    if (view === 'home')
        return <HomePage onSearchResults={goToSearchPage} />
    else if (view === 'search')
        return <SearchPage results={results} />

}