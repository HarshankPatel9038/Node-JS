/* The line `const rectangle = require('./rectangle');` is importing the `rectangle` module from the
current directory. It assigns the exported object from the `rectangle` module to the variable
`rectangle`, allowing you to access and use the functions and properties defined in the `rectangle`
module. */
const rectangle = require('./rectangle');
/* The line `const employeeBonus = require('./bonus');` is importing the `bonus` module from the
current directory. It assigns the exported object from the `bonus` module to the variable
`employeeBonus`, allowing you to access and use the functions and properties defined in the `bonus`
module. */
const employeeBonus = require('./bonus');

// // Method: 1
// console.log("============== Method: 1 ==============");
/* The code is calling the `area` and `perimeter` functions from the `rectangle` module and passing the
arguments `10` and `20` to calculate the area and perimeter of a rectangle with length `10` and
width `20`. The calculated values are then printed to the console. */
// rectangle.area(10, 20);  //Area Of Rectangle Is: 200
// rectangle.perimeter(10, 20);  //Perimeter Of Rectangle Is: 60

// // Method: 2
// console.log("\n============== Method: 2 ==============");
/**
 * The function `checkInput` takes in two parameters, `l` and `w`, and checks if they are valid inputs
 * for calculating the area and perimeter of a rectangle, and if so, it calculates and prints the area
 * and perimeter.
 * @param l - The parameter `l` represents the length of the rectangle.
 * @param w - The parameter `w` represents the width of the rectangle.
 */
// const checkInput = (l, w) => {
//     if (l <= 0 || w <= 0) {
//         console.log("Invalid Input");
//     } else {
//         rectangle.area(l, w);
//         rectangle.perimeter(l, w);
//     }
// }
// checkInput(5, 8);
// //Area Of Rectangle Is: 40
// //Perimeter Of Rectangle Is: 26
// checkInput(0, 8);  //Invalid Input
// checkInput(5, -8);  //Invalid Input



// Method: 3
console.log("============== Method: 3 ==============");
console.log("\n======== Rectangle ========");
/**
 * The function `checkInput` takes in two parameters, `l` and `w`, and checks if they form a valid
 * rectangle, and if so, calculates and prints the area and perimeter of the rectangle.
 * @param l - 10 (length of the rectangle)
 * @param w - 20
 */
const checkInput = (l, w) => {  //2
    rectangle.checkRectangle(l, w, (err, obj) => {  //3
        if (err) {
            console.log(err.message);  //6
        } else {
            console.log("Area Of Circle Is: " + obj.area());  //6  //Area Of Circle Is: 200
            console.log("Perimeter Of circle Is: " + obj.perimeter());  //6 //Perimeter Of circle Is: 60
        }
    });
}

checkInput(10, 20);   //1






console.log("\n======== Employee Bonus ========");
/**
 * The `checkBonus` function calculates the bonus, total salary with bonus, and bonus percentage for a
 * given salary.
 * @param salary - The `salary` parameter represents the salary of an employee. It is used to calculate
 * the bonus percentage, bonus amount, and total salary with bonus.
 */
const checkBonus = (salary) => {
    employeeBonus.calculateBonus(salary, (err, obj) => {
        if (err) {
            console.error('\n' + err.message);
        } else {
            console.log(`\nYour Bonus is ${obj.bonusPercentage()}% of your salary, which is ${obj.bonusAmount()}`);
            console.log(`Your Total Salary with Bonus is ${obj.totalSalary()}`);
        }
    });
};
checkBonus(-5000);  //Salary must be greater than 0
checkBonus(0);  //Salary must be greater than 0
checkBonus(8000);
// Your Bonus is 10% of your salary, which is 800
// Your Total Salary with Bonus is 8800
checkBonus(15000);
// Your Bonus is 15% of your salary, which is 2250
// Your Total Salary with Bonus is 17250
checkBonus(22000);
// Your Bonus is 20% of your salary, which is 4400
// Your Total Salary with Bonus is 26400
checkBonus(48000);
// Your Bonus is 20% of your salary, which is 9600
// Your Total Salary with Bonus is 57600