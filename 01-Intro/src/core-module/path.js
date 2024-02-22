/* The line `const path = require('path');` is importing the built-in `path` module in Node.js. This
module provides utilities for working with file and directory paths. By assigning it to the variable
`path`, we can access and use its functions and properties throughout our code. */
const path = require('path');



// path Module
console.log('\n============ path ============');
console.log(__dirname); //E:\Bitkhanan\Node Js\01-Intro\src
console.log(__filename); //E:\Bitkhanan\Node Js\01-Intro\src\index.js

console.log('==== basename ====');
console.log(path.basename('E:\\Bitkhanan\\Node Js\\01-Intro\\src\\index.js')); //index.js
console.log(path.basename(__filename));  //index.js
console.log(path.basename(__dirname)); //src
console.log(path.basename('E:\\Bitkhanan\\Node Js\\01-Intro\\src\\index.js', '.js')); //index

console.log('==== dirname ====');
console.log(path.dirname('E:\\Bitkhanan\\Node Js\\01-Intro\\src\\index.js')); //E:\Bitkhanan\Node Js\01-Intro\src
console.log(path.dirname(__filename));  //E:\Bitkhanan\Node Js\01-Intro\src

console.log('==== extname ====');
console.log(path.extname('E:\\Bitkhanan\\Node Js\\01-Intro\\src'));  //  (Empty)
console.log(path.extname(__filename));  //.js

console.log('==== join ====');
console.log(path.join('\abc', 'def', 'ghi\jkl', 'mnl'));  //abc\def\ghijkl\mnl
console.log(path.join('\abc', 'def', 'ghi\jkl', 'mnl', '..'));  //abc\def\ghijkl
console.log(path.join('\abc', 'def', 'ghi\jkl', 'mnl', '..', '..'));  //abc\def
console.log(path.join(__filename, '\abc', 'def'));  //E:\Bitkhanan\Node Js\01-Intro\src\index.js\abc\def
console.log(path.join(__dirname, '\abc', 'def'));  //E:\Bitkhanan\Node Js\01-Intro\src\abc\def
console.log(path.join(__dirname, '\abc', '../def'));  //E:\Bitkhanan\Node Js\01-Intro\src\def

console.log('==== normalize ====');
console.log(path.normalize('E:\\temp\\\\foo\\abc'));  //E:\temp\foo\abc
console.log(path.normalize('E:\\temp\\\\foo\\abc\\..'));  //E:\temp\foo
console.log(path.win32.normalize('E:\\temp\\\/\\foo\/\abc\\..'));  //E:\temp\foo

console.log('==== parse ====');
console.log(path.parse(__filename));
// {
//     root: 'E:\\',
//     dir: 'E:\\Bitkhanan\\Node Js\\01-Intro\\src',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
console.log(path.parse(__filename).root);  //E:\
console.log(path.parse(__filename).dir);  //E:\Bitkhanan\Node Js\01-Intro\src
console.log(path.parse(__filename).base);  //index.js
console.log(path.parse(__filename).ext);  //.js
console.log(path.parse(__filename).name);  //index

console.log('==== isAbsolute ====');
console.log(path.isAbsolute(__filename));  //true
console.log(path.isAbsolute('E:\\'));  //true
console.log(path.isAbsolute('E:\/'));  //true
console.log(path.isAbsolute('temp\\\/\\foo'));  //false

console.log('==== resolve ====');
console.log(path.resolve(__dirname, 'abc'));  //E:\Bitkhanan\Node Js\01-Intro\src\abc
console.log(path.resolve(__dirname, '../abc'));  //E:\Bitkhanan\Node Js\01-Intro\abc
console.log(path.resolve(__dirname, '/abc'));  //E:\abc
console.log(path.resolve(__dirname, '/abc'));  //E:\abc
console.log(path.resolve(__dirname, '/abc', '//def'));  //E:\def