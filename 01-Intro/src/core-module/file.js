/* The line `const fs = require('fs');` is importing the built-in Node.js module `fs`, which stands for
"file system". This module provides functions for interacting with the file system, such as
creating, reading, updating, and deleting files and directories. By assigning `require('fs')` to the
variable `fs`, we can access the functions provided by the `fs` module in our code. */
const fs = require('fs');

// file Module
console.log('============ file ============');


/* The `fs.mkdir` function is used to create a new directory. In this case, it is creating a directory
named "file" inside the "./src/core-module/assets" directory. The `{ recursive: true }` option is
used to create parent directories if they do not exist. */
fs.mkdir("./src/core-module/assets/file", { recursive: true }, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('File Created');
});

/* The `fs.writeFile` function is used to create a new file and write content to it. In this case, it
is creating a file named "file.txt" inside the "./src/core-module/assets/file" directory and writing
the string "Hi" as the content of the file. */
fs.writeFile("./src/core-module/assets/file/file.txt", "Hi", (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('File Created & Write');
});

/* The `fs.appendFile` function is used to append content to an existing file. In this case, it is
appending the string "\nCreated With Node" to the file named "file.txt" inside the
"./src/core-module/assets/file" directory. If there is an error during the operation, it will be
logged to the console. If the operation is successful, it will log "File Text Added" to the console. */
fs.appendFile("./src/core-module/assets/file/file.txt", "\nCreated With Node", (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('File Text Added');
});

/* The `fs.readFile` function is used to read the contents of a file. In this case, it is reading the
file named "file.txt" inside the "./src/core-module/assets/file" directory. The second argument
"utf-8" specifies the encoding of the file, which is set to UTF-8 in this case. */
fs.readFile("./src/core-module/assets/file/file.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data);
});

/* The `fs.stat` function is used to retrieve information about a file or directory. In this case, it
is retrieving information about the file named "file.txt" inside the "./src/core-module/assets/file"
directory. */
fs.stat("./src/core-module/assets/file/file.txt", (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data);
});

/* The `fs.unlink` function is used to delete a file. In this case, it is deleting the file named
"file.txt" inside the "./src/core-module/assets/file" directory. If there is an error during the
deletion, the error message will be logged to the console. If the deletion is successful, it will
log "File Deleted" to the console. */
fs.unlink("./src/core-module/assets/file/file.txt", (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('File Deleted');
});