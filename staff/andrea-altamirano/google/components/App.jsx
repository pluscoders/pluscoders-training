const useState = React.useState

function App() {

    const [view, setView] = useState('home')

    const goToSearchPage = () => {
        setView('searched')

        logger.debug('App -> goToSearchPage')
    }

    if (view === 'home')
        return <HomePage onSearchedItem={goToSearchPage} />
    else if (view === 'searched')
        return <SearchPage />

}