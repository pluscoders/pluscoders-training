function SearchPage(props) {
    return <div>
        <header>
            <img src="https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="" />
            <input className="rounded-md border h-12" name="query" type="text" />
        </header>
        <main>
            <ResultList results={props.results}/>
        </main>
    </div>
}