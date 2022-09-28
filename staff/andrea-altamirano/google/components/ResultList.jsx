function ResultList(results){
    return <ul>
        {results.map(result => <li>
            <div>
            <h3>{results.title}</h3>
            <a href="${result.url}">{results.url}</a>
            </div>
        </li>)}
    </ul>    
}