let obj = {
    id: 101,
    name: 'Amit',
    city: 'Surat'
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.fromEntries(Object.entries(obj)));
// console.log(Object.assign({}, obj, {sirname: 'hello'}));
// console.log(Object.hasOwnProperty('age'));
// console.log(Object.hasOwnProperty('name'));

// Object.freeze(obj);

// // Update
// obj.city = 'Vapi';
// console.log(obj);

// // Add
// obj.age = 25;
// console.log(obj);

// // Delete
// delete obj.age
// console.log(obj);






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

/* The code is filtering the `institutes` array to only include the institutes that have at least one
seat with a value greater than 0. */
console.log('========== Method 1 ==========');
const data = institues.map((v) => {
    return {
        id: v.id,
        name: v.name,
        seat: v.seat.map((s) => Object.fromEntries(Object.entries(s).filter(([key, value]) => value > 0)))
    }
}).filter((v) => Object.keys(v.seat[0]).length > 0);
console.log(data);


/* The code is filtering the `institutes` array to only include the institutes that have at least one
seat with a value greater than 0. */
console.log('========== Method 2 ==========');
const filteredInstitutes = institues.filter(institute => {
    return institute.seat.some(seat => Object.values(seat).some(value => value > 0));
});
const ans = filteredInstitutes.map(institute => ({
    id: institute.id,
    name: institute.name,
    seat: institute.seat.map(seat => Object.fromEntries(
        Object.entries(seat).filter(([key, value]) => value > 0)
    ))
}));
console.log(ans);