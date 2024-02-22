/**
 * The `calculateBonus` function calculates the bonus amount and total salary based on the given
 * salary, and returns the results through a callback function.
 * @param salary - The salary parameter represents the base salary of an employee.
 * @param callback - The `callback` parameter is a function that will be called once the bonus
 * calculation is complete. It takes two arguments: an error object (if there is an error) and a result
 * object (if the calculation is successful).
 */
const calculateBonus = (salary, callback) => {
    if (salary <= 0) {
        callback(new Error('Salary must be greater than 0'), null);
    } else {
        let bonusPercentage;
        if (salary < 10000) {
            bonusPercentage = 0.1;
        } else if (salary < 20000) {
            bonusPercentage = 0.15;
        } else {
            bonusPercentage = 0.2;
        }

        const bonusAmount = salary * bonusPercentage;
        const totalSalary = salary + bonusAmount;

        callback(null, {
            bonusPercentage: () => bonusPercentage * 100,
            bonusAmount: () => bonusAmount,
            totalSalary: () => totalSalary
        });
    }
};

/* In JavaScript, `module.exports` is a special object that is used to define the public interface of a
module. By assigning `calculateBonus` to `module.exports`, we are making the `calculateBonus`
function available for other modules to use when they import this module. This allows other modules
to access and use the `calculateBonus` function. */
module.exports = {
    calculateBonus
};