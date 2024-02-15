import { promises as fsPromises } from 'fs';

// Attach 'exit' event to the 'process' object
process.on('exit', (code) => {
    console.log(`'exit' event called with code ${code}`);
});

// Attach 'unhandledRejection' event to the 'process' object
process.on('unhandledRejection', (reason, promise) => {
    console.error("'unhandledRejection' event called:");
    console.error("Reason:", reason);
    console.error("Promise:", promise);
});

// Promisified version of fs.readFile sync function
function readFileAsync(filename) {
    return new Promise((resolve, reject) => {
        fsPromises.readFile(filename)
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Usage of the promisified function with incorrect file name
readFileAsync('nonexistentfile.txt')
    .then(data => console.log("File content:", data.toString()))
    .catch(error => {
        console.error("Error occurred while reading file:", error);
        throw new Error("Error thrown from catch handler");
    });