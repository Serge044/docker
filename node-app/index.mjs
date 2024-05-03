import fs from 'fs'

fs.appendFile('my-file.txt', 'This file was created by Node.js', (err) => {
    if (err) throw err
    console.log('File was saved!');
})

setTimeout(() => console.log('Fin!'), 30000)