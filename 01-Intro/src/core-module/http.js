/* In JavaScript, `const os = require('os');` is importing the built-in `os` module. The `os` module
provides a set of operating system-related utility methods and properties. By requiring the `os`
module, you can access various functions and properties to get information about the operating
system, such as platform, release version, architecture, CPU details, network interfaces, and more. */
/* In JavaScript, `const http = require('http');` is importing the built-in `http` module. This module
provides functionality to create an HTTP server and make HTTP requests. By assigning it to the
`http` constant, you can use the methods and properties provided by the `http` module in your code. */
const http = require('http');
/* In JavaScript, `const url = require('url');` is importing the built-in `url` module. This module
provides functionality to parse and manipulate URLs. By assigning it to the `url` constant, you can
use the methods and properties provided by the `url` module in your code. */
const url = require('url');


/* The code `const myServer = http.createServer((req, res) => {
    console.log(req);
    console.log(req.headers);
    res.end('hello from Server');
});
myServer.listen(8080, () => console.log('Server listening on port'));` is creating an HTTP server
that listens on port 8080. */
// const myServer = http.createServer((req, res) => {
//     console.log(req);
//     console.log(req.headers);
//     res.end('hello from Server');
// });
// myServer.listen(8080, () => console.log('Server listening on port'));




/* The code `http.createServer((req, res) => { ... }).listen(8080);` is creating an HTTP server that
listens on port 8080. */
// http.createServer((req, res) => {
//     res.write('Hello World!\n');
//     // res.write(req.url);
//     switch (req.url) {
//         case '/':
//             res.write('Welcome to HTTP Server 8080');
//             break;
//         case '/aboutus':
//             res.write('About Us');
//             break;
//         default:
//             res.write('Error 404');
//     }
//     res.end();
// }).listen(8080);



/* The code `const server = http.createServer((req, res) => { ... })` is creating an HTTP server using
the `http` module. The `createServer` method takes a callback function as an argument, which will be
executed whenever a request is made to the server. */
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     console.log(req.headers);
//     console.log(req.url);
//     // console.log(req.body);

//     console.log(url.parse(req.url, true).query.name);

//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     res.end('<h1>Hi</h1>');
// });
// server.listen(3000, () => {
//     console.log('Server Started!')
// });