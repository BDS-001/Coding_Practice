const fs = require('node:fs')
const path = require('path')

const content = 'testing node js filesystem'
const filepath = path.join(__dirname, 'fsTest.txt')
console.log(__dirname)

//sync
try {
    fs.writeFileSync(filepath, content)
    console.log('file was written successfully')
} catch (err) {
    console.log(err)
}

//append and async
const newContent = '\nThis should append to the file isntead of overwrite it'
fs.appendFile(filepath, newContent, {flag: 'a+',}, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('content was appended successfully')
    }
})

