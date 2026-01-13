import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';


//URL object
const urlObj = new URL(urlString);
console.log('Object with all information about the given url string:', urlObj);

//format()
console.log(`Converts object back to original string url: ${url.format(urlObj)}`)


//import.meta.url - file URL
console.log(import.meta.url)

// fileURLToPath
console.log(url.fileURLToPath(import.meta.url))

// search parameters
console.log(urlObj.search)

// getting the params as object
const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'))
params.append('limit', '5')
console.log(params)
params.delete('limit')
console.log(params)
