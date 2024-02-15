const fs = require('fs');


fs.readFile('poem.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    console.log('Contents of poem.txt:');
    console.log(data);
});