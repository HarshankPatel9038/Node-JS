/* `const express = require('express');` is importing the Express module in JavaScript. Express is a
web application framework for Node.js that simplifies the process of building web applications and
APIs. By requiring the 'express' module, we can use the functionalities provided by Express in our
code. */
const express = require('express');

/* `const app = express();` is creating an instance of the Express application. This instance will be
used to define the routes and middleware for the web application. */
const app = express();

/* `app.use(express.json());` is a middleware function in Express that parses incoming requests with
JSON payloads. */
app.use(express.json());


let institues = [
    {
        id: 1,
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        id: 2,
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        id: 3,
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        id: 4,
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
];

/* The code `const data = institues.map((v) => {
    return {
        id: v.id,
        name: v.name,
        seat: v.seat.map((s) => Object.fromEntries(Object.entries(s).filter(([key, value]) => value
> 0)))
    }
}).filter((v) => Object.keys(v.seat[0]).length > 0);` is creating a new array called `data` by
transforming the `institues` array. */
const data = institues.map((v) => {
    return {
        id: v.id,
        name: v.name,
        seat: v.seat.map((s) => Object.fromEntries(Object.entries(s).filter(([key, value]) => value > 0)))
    }
}).filter((v) => Object.keys(v.seat[0]).length > 0);


/* `app.get('/', function (req, res) { ... })` is defining a route handler for the GET request to the
root URL ("/") of the web application. */
app.get('/', function (req, res) {
    res.status(200).json({
        success: true,
        data: data,
        message: 'Data GET Successfully'
    });
})


// POST DATA
// {
//     "id": 1,
//     "username": "A",
//     "city": "Surat"
// }

/* The `app.post('/', function (req, res) { ... })` code block is defining a route handler for the POST
request to the root URL ("/") of the web application. */
app.post('/', function (req, res) {
    const bodyData = req.body;

    /* The code `let ans = bodyData.map((v) => {
            return {
                id: v.id,
                name: v.name,
                seat: v.seat.map((s) => Object.fromEntries(Object.entries(s).filter(([key, value])
    => value > 0)))
            }
        }).filter((v) => Object.keys(v.seat[0]).length > 0);` is creating a new array called `ans`
    by transforming the `bodyData` array. */
    let ans = bodyData.map((v) => {
        return {
            id: v.id,
            name: v.name,
            seat: v.seat.map((s) => Object.fromEntries(Object.entries(s).filter(([key, value]) => value > 0)))
        }
    }).filter((v) => Object.keys(v.seat[0]).length > 0);

    const marge = data.concat(ans);

    res.status(200).json({
        success: true,
        data: marge,
        message: 'Data POST Successfully'
    });
})

/* The `app.put('/:id/:tech', (req, res) => { ... })` code block is defining a route handler for the
PUT request to the URL pattern "/:id/:tech" of the web application. This route handler is
responsible for updating the seat availability for a specific technology in a specific institute. */
app.put('/:id/:tech', (req, res) => {
    const instId = parseInt(req.params.id);
    const tech = req.params.tech;
    const userInput = 10;

    /* The code `const instIndex = institues.findIndex(inst => inst.id === instId);` is finding the
    index of the institute in the `institues` array based on the provided `instId`. */
    const instIndex = institues.findIndex(inst => inst.id === instId);
    if (instIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Institute Not Found'
        });
    }

    /* The code `const techIndex = institues[instIndex].seat.findIndex(s => s.hasOwnProperty(tech));`
    is finding the index of the technology in the `seat` array of a specific institute. */
    const techIndex = institues[instIndex].seat.findIndex(s => s.hasOwnProperty(tech));
    if (techIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Technology Not Found'
        });
    }

    /* The code `institues[instIndex].seat[techIndex][tech] = userInput;` is updating the seat
    availability for a specific technology in a specific institute. It assigns the value of
    `userInput` to the corresponding technology property in the `seat` array of the specified
    institute. */
    institues[instIndex].seat[techIndex][tech] = userInput;
    res.status(200).json({
        success: true,
        data: institues[instIndex],
        message: 'Data Updated Successfully'
    });
});

/* The `app.delete('/:id', (req, res) => { ... })` code block is defining a route handler for the
DELETE request to the URL pattern "/:id" of the web application. This route handler is responsible
for deleting data for a specific institute based on the provided `id` parameter. */
app.delete('/:id', (req, res) => {
    const instId = req.params.id;

    let ans = data.filter((value) => value.id != instId);
    if (ans.length == 0) {
        return res.status(404).json({
            success: false,
            message: 'Data Not Found'
        });
    } else {
        return res.status(200).json({
            success: true,
            data: ans,
            message: 'Data Delete Successfully'
        });
    }
})

/* `app.listen(3000, () => {
    console.log('Server Started')
})` is starting the Express server and listening for incoming HTTP requests on port 3000. */
app.listen(3000, () => {
    console.log('Server Started')
})