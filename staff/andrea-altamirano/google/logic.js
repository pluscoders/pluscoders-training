/**
 * Searches a query in Google.
 * 
 * Example:
 * ```
 * searchInGoogle('andrea', function(googleResults) {
 *   console.log(googleResults)
 * })
 * ```
 * 
 * @param {string} query 
 * @param {function} callback 
 */
function searchInGoogle(query, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = function() {
        const doc = new DOMParser().parseFromString(xhr.responseText, 'text/html')

        const items = doc.querySelectorAll('.yuRUbf')
        
        const results = []
        
        items.forEach(item => {
            const anchor = item.querySelector('a')
            const url = anchor.href
        
            const title = item.querySelector('h3').innerText
        
            const result = { title, url }
            
            results.push(result)
        })

        
        callback(results)
    }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/proxy?url=https://www.google.com/search?q=${query}`, true)

    xhr.send()
}