function ResultList(props) {
    return <ul>
        {props.results.map(result => <li>
            <h3><a href={result.url}>{result.title}</a></h3>
        </li>)}
    </ul>
}