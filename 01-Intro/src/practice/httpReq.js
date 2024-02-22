const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         fs.readFile("./src/practice/data.json", "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err.message);
//                 return;
//             }
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(data);
//         });
//     }
// });
// server.listen(3001, () => {
//     console.log('Server Started!')
// });







/* The above code is creating a server using the `http` module in Node.js. It listens for HTTP requests
and handles GET, POST, PUT, and DELETE requests to different endpoints. */
server = http.createServer((req, res) => {
    /* The above code is parsing the URL of a request and extracting the pathname from it. It is using
    the `url.parse()` method to parse the URL and the `pathname` property to get the pathname. The
    `true` argument passed to `url.parse()` is used to parse the query string as well. */
    const parsedURL = url.parse(req.url, true).pathname;

    /* The above code is defining a constant variable `dataPath` which is the path to a JSON file named
    `data.json`. The `path.join()` function is used to join the current directory (`__dirname`) with
    the file name to create the complete file path. */
    const dataPath = path.join(__dirname, '/data.json');

    if (req.method === 'GET' && parsedURL === '/api/v1/users') {
        /* This code block is handling a GET request to the '/api/v1/users' endpoint. */
        try {
            /* The code block `try { ... }` is used to handle potential errors that may occur during the
        execution of the code inside the block. */
            fs.readFile(dataPath, "utf-8", (error, data) => {
                if (error) {
                    /* The code block `if (error) { ... }` is used to handle errors that occur
                        during the execution of the code inside the `fs.readFile` or `fs.writeFile`
                        functions. */
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: error.message }));
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    data,
                    message: 'Get userData successfully'
                }));
            });
        } catch (error) {
            /* The code `catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            }` is a catch block that is used to handle any errors that occur within the try
            block. */
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.message }));
        }
    } else if (req.method === 'POST' && parsedURL === '/api/v1/users') {

        /* The `else if (req.method === 'POST' && parsedURL === '/api/v1/users')` block of code is
    handling a POST request to the '/api/v1/users' endpoint. */

        let bodyData = '';

        /* `req.on('data', (chunk) => { bodyData += chunk; });` is an event listener that listens for
        the 'data' event on the request object (`req`). */
        req.on('data', (chunk) => {
            bodyData += chunk;
        });

        /* The `req.on('end', () => { ... })` block of code is an event listener that listens for the
        'end' event on the request object (`req`). */
        req.on('end', () => {
            try {
                /* The `fs.readFile` function is used to read the contents of a file asynchronously. In
                this code snippet, it is reading the contents of the file specified by `dataPath`
                (which is the path to the JSON file) with the encoding set to 'utf-8'. */
                fs.readFile(dataPath, 'utf-8', (error, oldData) => {
                    if (error) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: error.message }));
                        return;
                    }

                    /* In the given code, `st` is not doing anything. It seems to be a typo or an
                    incomplete variable name. */
                    const parsedOldData = JSON.parse(oldData);

                    /* The line `const newData = JSON.parse(bodyData);` is parsing the `bodyData`
                    variable, which contains the data received in the request body, into a
                    JavaScript object. */
                    const newData = JSON.parse(bodyData);

                    /* The line `parsedOldData.push(newData);` is adding the `newData` object to the
                    `parsedOldData` array. It is essentially appending the `newData` object to the
                    end of the array. */
                    parsedOldData.push(newData);

                    /* The `fs.writeFile` function is used to write data to a file asynchronously. In
                    this code snippet, it is writing the `parsedOldData` array, which has been
                    converted to a JSON string using `JSON.stringify`, to the file specified by
                    `dataPath`. */
                    fs.writeFile(dataPath, JSON.stringify(parsedOldData), (error) => {
                        if (error) {
                            /* The code block `if (error) { ... }` is used to handle errors that occur
                        during the execution of the code inside the `fs.readFile` or `fs.writeFile`
                        functions. */
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ message: error.message }));
                            return;
                        }

                        /* The code `res.writeHead(200, { 'Content-Type': 'application/json' });` is
                        setting the response header for the HTTP response. */
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true, message: 'Data added successfully' }));
                    });
                });
            } catch (error) {
                /* The code `catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            }` is a catch block that is used to handle any errors that occur within the try
            block. */
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
            }
        });
    } else if (req.method === 'PUT' && parsedURL === '/api/v1/users') {

        /* The `else if (req.method === 'PUT' && parsedURL === '/api/v1/users')` block of code is
    handling a PUT request to the '/api/v1/users' endpoint. */

        let bodyData = '';

        req.on('data', (chunk) => {
            bodyData += chunk;
        });

        const IdOfURL = url.parse(req.url, true).query.id;

        fs.readFile(dataPath, 'utf-8', (error, oldData) => {
            if (error) {
                /* The code block `if (error) { ... }` is used to handle errors that occur
                        during the execution of the code inside the `fs.readFile` or `fs.writeFile`
                        functions. */
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
                return;
            }
            /* The line `let parsedOldData = JSON.parse(oldData);` is parsing the contents of the
            `oldData` variable, which is a JSON string, into a JavaScript object. This allows you to
            access and manipulate the data in the `oldData` object as a JavaScript object instead of
            a string. */
            let parsedOldData = JSON.parse(oldData);

            /* The line `const newData = JSON.parse(bodyData);` is parsing the `bodyData` variable,
            which contains the data received in the request body, into a JavaScript object. This
            allows you to access and manipulate the data in the `newData` object as a JavaScript
            object instead of a string. */
            const newData = JSON.parse(bodyData);

            /* The line `let index = parsedOldData.findIndex((value) => value.id);` is finding the
            index of an object in the `parsedOldData` array that has a specific `id` property. */
            let index = parsedOldData.findIndex((value) => value.id);

            /* The line `parsedOldData[index] = newData;` is updating the value at a specific index in
            the `parsedOldData` array with the `newData` object. */
            parsedOldData[index] = newData;

            /* The code `fs.writeFile(dataPath, JSON.stringify(parsedOldData), (error) => { ... })` is
            used to write data to a file asynchronously. */
            fs.writeFile(dataPath, JSON.stringify(parsedOldData), (error) => {
                if (error) {
                    /* The code block `if (error) { ... }` is used to handle errors that occur during the
                execution of the code inside the `fs.readFile` or `fs.writeFile` functions. */
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: error.message }));
                    return;
                }

                /* The code `res.writeHead(200, { 'Content-Type': 'application/json' });` is setting
                the response header for the HTTP response. It specifies that the response will be in
                JSON format. */
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Data Updated successfully' }));
            });
        });
    } else if (req.method === 'DELETE' && parsedURL === '/api/v1/users') {

        /* The `else if (req.method === 'DELETE' && parsedURL === '/api/v1/users')` block of code is
    handling a DELETE request to the '/api/v1/users' endpoint. */

        /* The line `const IdOfURL = url.parse(req.url, true).query.id;` is extracting the value of the
        `id` query parameter from the URL of the request. */
        const IdOfURL = url.parse(req.url, true).query.id;

        fs.readFile(dataPath, 'utf-8', (error, oldData) => {
            if (error) {
                /* The code block `if (error) { ... }` is used to handle errors that occur
                        during the execution of the code inside the `fs.readFile` or `fs.writeFile`
                        functions. */
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: error.message }));
                return;
            }
            /* The line `let parsedOldData = JSON.parse(oldData);` is parsing the contents of the
            `oldData` variable, which is a JSON string, into a JavaScript object. This allows you to
            access and manipulate the data in the `parsedOldData` object as a JavaScript object
            instead of a string. */
            let parsedOldData = JSON.parse(oldData);

            /* The above code is filtering out data from an array called `parsedOldData` based on a
            condition. It is using the `filter` method to create a new array that only contains
            elements where the `id` property is not equal to `IdOfURL`. */
            let filterData = parsedOldData.filter((value) => value.id != IdOfURL);

            /* The above code is writing data to a file using the `fs.writeFile` function in
            JavaScript. It is writing the `filterData` object as a JSON string to the file specified
            by the `dataPath` variable. */
            fs.writeFile(dataPath, JSON.stringify(filterData), (error) => {
                if (error) {
                    /* The code block `if (error) { ... }` is used to handle errors that occur during the
                execution of the code inside the `fs.readFile` or `fs.writeFile` functions. */
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: error.message }));
                    return;
                }

                /* The above code is setting the response status code to 200 and the content type to
                'application/json'. It then sends a JSON response with a success property set to
                true and a message property set to 'Data Delete successfully'. */
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Data Delete successfully' }));
            });
        });
    }
});

/* The above code is starting a server on port 3005 and logging a message "Server Started!" to the
console when the server starts. */
server.listen(3005, () => {
    console.log('Server Started!');
});