const fs = require('node:fs')
const path = require('path')

const content = 'testing node js filesystem'
const filepath = path.join(__dirname, 'fsTest.txt')
console.log(__dirname)

async function generateFile() {
    console.log('\nWritting File:\n-----------------------------------------')
    //write
    try {
        fs.writeFileSync(filepath, content)
        console.log('file was written successfully')
    } catch (err) {
        console.log(err)
    }

    //append
    const newContent = '\nThis should append to the file isntead of overwrite it'
    try {
        fs.appendFileSync(filepath, newContent)
        console.log('file was appended successfully')
    } catch (err) {
        console.log(err)
    }
}

async function readFile() {
    await generateFile()
    console.log('\nReading File:\n-----------------------------------------')

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

readFile()
