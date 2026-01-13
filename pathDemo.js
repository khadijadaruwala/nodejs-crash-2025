import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/test.txt' 

//basename()
console.log(`Base name of the path: ${path.basename(filePath)}`)

//dirname()
console.log(`Directory of the path: ${path.dirname(filePath)}`)

//extname()
console.log(`Extension of the path: ${path.extname(filePath)}`)

//parse()
console.log(path.parse(filePath))

const __fileName = url.fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

console.log(__fileName, __dirName)

// join()
const filePath2 = path.join(__dirName, 'dir1', 'dir2', 'test.txt')
console.log(`Joining a new path; ${filePath2}`)

//resolve()
const filePath3 = path.join(__dirName, 'dir1', 'dir2', 'test.txt')
console.log(`Resolving a new path; ${filePath3}`)
