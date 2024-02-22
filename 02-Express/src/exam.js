/* `const express = require('express');` is importing the Express module in JavaScript. Express is a
web application framework for Node.js that simplifies the process of building web applications and
APIs. By requiring the 'express' module, we can use the functionalities provided by Express in our
code. */
const express = require('express');

/* `const app = express();` is creating an instance of the Express application. It initializes the
Express application and allows us to use the functionalities provided by Express, such as routing,
middleware, and handling HTTP requests and responses. */
const app = express();

/* `app.use(express.json());` is a middleware function in Express that parses incoming requests with
JSON payloads. It allows the server to handle JSON data sent in the request body. */
app.use(express.json());

let arr = [
    {
        "_id": 1,
        "name": "John Doe",
        "age": 28,
        "city": "New York",
        "gender": "Male",
        "posts": [
            { "title": "Post 1", "likes": 15, "comments": ["Great post!", "Interesting"] },
            { "title": "Post 2", "likes": 20, "comments": ["Well done"] }
        ],
        "friends": [2, 3],
        "skills": ["JavaScript", "React", "Node.js"],
        "isActive": true
    },
    {
        "_id": 2,
        "name": "Alice Johnson",
        "age": 32,
        "city": "Los Angeles",
        "gender": "Female",
        "posts": [
            { "title": "Post 3", "likes": 10, "comments": ["Nice!", "Awesome"] },
            { "title": "Post 4", "likes": 25, "comments": ["Impressive"] }
        ],
        "friends": [1, 3],
        "skills": ["Python", "Django", "JavaScript"],
        "isActive": true
    },
    {
        "_id": 3,
        "name": "Bob Williams",
        "age": 24,
        "city": "New York",
        "gender": "Male",
        "posts": [
            { "title": "Post 5", "likes": 18, "comments": ["Keep it up"] },
            { "title": "Post 6", "likes": 22, "comments": ["Awesome"] }
        ],
        "friends": [1, 2],
        "skills": ["Java", "Spring Boot", "JavaScript"],
        "isActive": false
    },
    {
        "_id": 4,
        "name": "Diana Brown",
        "age": 30,
        "city": "San Francisco",
        "gender": "Female",
        "posts": [
            { "title": "Post 7", "likes": 12, "comments": ["Interesting"] },
            { "title": "Post 8", "likes": 30, "comments": ["Well done", "Great post!"] }
        ],
        "friends": [5, 6],
        "skills": ["React", "Node.js", "MongoDB"],
        "isActive": true
    },
    {
        "_id": 5,
        "name": "Elijah Wilson",
        "age": 26,
        "city": "Los Angeles",
        "gender": "Male",
        "posts": [
            { "title": "Post 9", "likes": 14, "comments": ["Nice!"] },
            { "title": "Post 10", "likes": 18, "comments": ["Impressive"] }
        ],
        "friends": [4, 6],
        "skills": ["JavaScript", "Vue.js", "Express.js"],
        "isActive": false
    },
    {
        "_id": 6,
        "name": "Fiona Miller",
        "age": 29,
        "city": "San Francisco",
        "gender": "Female",
        "posts": [
            { "title": "Post 11", "likes": 22, "comments": ["Awesome"] },
            { "title": "Post 12", "likes": 25, "comments": ["Great post!"] }
        ],
        "friends": [4, 5],
        "skills": ["React", "Angular", "Node.js"],
        "isActive": true
    },
    {
        "_id": 7,
        "name": "George Taylor",
        "age": 35,
        "city": "Los Angeles",
        "gender": "Male",
        "posts": [
            { "title": "Post 13", "likes": 18, "comments": ["Keep it up"] },
            { "title": "Post 14", "likes": 20, "comments": ["Awesome"] }
        ],
        "friends": [8, 9],
        "skills": ["Python", "Flask", "Django"],
        "isActive": false
    },
    {
        "_id": 8,
        "name": "Hannah Robinson",
        "age": 27,
        "city": "San Francisco",
        "gender": "Female",
        "posts": [
            { "title": "Post 15", "likes": 15, "comments": ["Nice!", "Interesting"] },
            { "title": "Post 16", "likes": 28, "comments": ["Well done"] }
        ],
        "friends": [7, 9],
        "skills": ["JavaScript", "React", "Vue.js"],
        "isActive": true
    },
    {
        "_id": 9,
        "name": "Isaac Moore",
        "age": 31,
        "city": "Portland",
        "gender": "Male",
        "posts": [
            { "title": "Post 17", "likes": 10, "comments": ["Nice!", "Impressive"] },
            { "title": "Post 18", "likes": 22, "comments": ["Great post!"] }
        ],
        "friends": [7, 8],
        "skills": ["Node.js", "Express.js", "MongoDB"],
        "isActive": false
    },
    {
        "_id": 10,
        "name": "Jasmine Hill",
        "age": 23,
        "city": "Portland",
        "gender": "Female",
        "posts": [
            { "title": "Post 19", "likes": 18, "comments": ["Keep it up", "Awesome"] },
            { "title": "Post 20", "likes": 25, "comments": ["Interesting"] }
        ],
        "friends": [9, 7],
        "skills": ["Java", "Spring Boot", "JavaScript"],
        "isActive": true
    }
]

/* The `app.get('/users/:id', function (req, res) { ... })` is a route handler in Express that handles
GET requests to the '/users/:id' endpoint. */
app.get('/users/:id', function (req, res) {
    const id = req.params.id;

    if (id) {
        let data = arr.filter(value => value["_id"] == id);

        if (data.length == 0) {
            res.status(400).json({
                success: false,
                message: 'Data Not Available'
            });
        } else {
            res.status(200).json({
                success: true,
                data: data,
                message: 'Data GET Successfully'
            });
        }
    } else {
        if (arr.length == 0) {
            res.status(400).json({
                success: false,
                message: 'Data Not Found'
            });
        } else {
            res.status(200).json({
                success: true,
                data: arr,
                message: 'Data GET Successfully'
            });
        }
    }
});



// POST Data
// [
//     {
//         "_id": 11,
//         "name": "ABC",
//         "age": 50,
//         "city": "Surat",
//         "gender": "Male",
//         "posts": [
//             { "title": "Post 14", "likes": 17, "comments": ["Xyz", "Pqr"] },
//             { "title": "Post 25", "likes": 20, "comments": ["Stu"] }
//         ],
//         "friends": [4, 8],
//         "skills": ["React", "Node", "JavaScript"],
//         "isActive": true
//     },
//     {
//         "_id": 12,
//         "name": "XYZ",
//         "age": 25,
//         "city": "Vapi",
//         "gender": "Female",
//         "posts": [
//             { "title": "Post 50", "likes": 60, "comments": ["Xyz", "Pqr"] },
//             { "title": "Post 24", "likes": 29, "comments": ["Stu"] }
//         ],
//         "friends": [4, 7],
//         "skills": ["HTML", "CSS", "JavaScript"],
//         "isActive": true
//     },
//     {
//         "_id": 13,
//         "name": "XYZ",
//         "age": 25,
//         "city": "Vapi",
//         "gender": "Female",
//         "posts": [],
//         "friends": [4, 7],
//         "skills": ["HTML", "CSS", "JavaScript"],
//         "isActive": true
//     },
//     {
//         "_id": 14,
//         "name": "XYZ",
//         "age": 25,
//         "city": "Vapi",
//         "gender": "Female",
//         "posts": [
//             { "title": "Post 50", "likes": 60, "comments": ["Xyz", "Pqr"] },
//             { "title": "Post 24", "likes": 29, "comments": ["Stu"] }
//         ],
//         "friends": [4, 7],
//         "skills": [],
//         "isActive": true
//     }
// ]


/* The `app.post('/users/:id', function (req, res) { ... })` is a route handler in Express that handles
POST requests to the '/users/:id' endpoint. */
app.post('/users/:id', function (req, res) {

    const id = req.params.id;
    let bodyData = req.body;

    if (bodyData.length == 0) {
        return res.status(400).json({
            success: false,
            message: 'Invalid or Empty Data'
        });
    } else {
        let filteredData = bodyData.filter(value => value["posts"].length !== 0 && value["skills"].length !== 0);
        if (id) {
            let newData = filteredData.filter(value => value["_id"] == id);
            if (newData.length == 0) {
                res.status(400).json({
                    success: false,
                    message: 'Data Not Available'
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: newData,
                    message: 'Data Post Successfully'
                });
            }
        } else {
            res.status(200).json({
                success: true,
                data: filteredData,
                message: 'Data Post Successfully'
            });
        }
    }
});

// GET DATA
// [
//     {
//         "_id": 1,
//         "name": "ABC",
//         "age": 50
//     },
//     {
//         "_id": 5,
//         "name": "XYZ",
//         "friends": [50, 45]
//     }
// ]

/* The above code is defining a route handler for a PUT request to update user data. It expects a
request parameter `id` to identify the user to be updated. It also expects a request body containing
the updated user data. */
app.put('/users/:id', function (req, res) {
    const id = req.params.id;
    let bodyData = req.body;

    if (id) {
        let getId = arr.filter((value) => value["_id"] == id);
        let bodyDataId = bodyData.filter((value) => value["_id"] == id);
        let CheckStatus = getId.filter((value) => value["isActive"]);

        if (getId.length == 0) {
            res.status(404).json({
                success: false,
                message: 'Data Not Found'
            });
        } else {
            if (CheckStatus.length == 0) {
                res.status(400).json({
                    success: false,
                    message: 'User Is InActive'
                });
            } else {
                let obj1 = {};
                let obj2 = {};
                getId.map((value) => {
                    obj1 = value
                })
                bodyDataId.map((value) => {
                    obj2 = value
                })
                let ans = [{ ...obj1, ...obj2 }];
                res.status(200).json({
                    success: true,
                    data: ans,
                    message: 'Data UPDATE Successfully'
                });
            }
        }
    }
});
/* The `app.delete('/users/:id', function (req, res) { ... })` is a route handler in Express that
handles DELETE requests to the '/users/:id' endpoint. */
app.delete('/users/:id', function (req, res) {
    const id = req.params.id;

    if (id) {
        let getId = arr.filter((value) => value["_id"] == id);

        if (getId.length == 0) {
            res.status(404).json({
                success: false,
                message: 'Data Not Found'
            });
        } else {
            let ans = arr.filter((value) => value["_id"] != id);

            res.status(200).json({
                success: true,
                data: ans,
                message: 'Data DELETE Successfully'
            });
        }
    } else {
        if (arr.length == 0) {
            res.status(400).json({
                success: false,
                message: 'Data Not Found'
            });
        } else {
            arr = [];
            res.status(200).json({
                success: true,
                data: arr,
                message: 'Data DELETE Successfully'
            });
        }
    }
});
/* `app.listen(3000, () => {
    console.log('Server Started');
})` is starting the Express server and listening for incoming HTTP requests on port 3000. */
app.listen(3000, () => {
    console.log('Server Started');
});