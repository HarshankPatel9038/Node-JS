/**
 * The function calculates the area of a rectangle given its length and width.
 * @param l - The parameter "l" represents the length of the rectangle.
 * @param w - The parameter `w` represents the width of the rectangle.
 */
// const area = (l, w) => {
//     console.log('Area Of Rectangle Is: ' + l * w);
// }

/**
 * The function calculates the perimeter of a rectangle given its length and width.
 * @param l - The parameter "l" represents the length of the rectangle.
 * @param w - The parameter "w" represents the width of the rectangle.
 */
// const perimeter = (l, w) => {
//     console.log('Perimeter Of Rectangle Is: ' + 2 * (l + w));
// }

/* `module.exports` is a special object in Node.js that is used to define the public interface of a
module. In this case, it is exporting the `area` and `perimeter` functions, making them accessible
to other modules that require this module. */
// module.exports = {
//     area,
//     perimeter
// }








// ============================
/**
 * The checkRectangle function takes in the length and width of a rectangle and a callback function,
 * and returns the area and perimeter of the rectangle through the callback if the input is valid.
 * @param l - The length of the rectangle.
 * @param w - The parameter `w` represents the width of the rectangle.
 * @param callback - The `callback` parameter is a function that will be called with two arguments: an
 * error object (if there is an error) and a result object (if there is no error).
 */
const checkRectangle = (l, w, callback) => {  //4
    if (l <= 0 || w <= 0) {
        callback(new Error("Invalid Input"), null);  //5
    } else {
        callback(null, {
            area: () => l * w,  //5    // clousre
            perimeter: () => 2 * (l + w)
        });
    }
}

/* `module.exports = { checkRectangle }` is exporting the `checkRectangle` function as a module. This
allows other modules to import and use the `checkRectangle` function. */
module.exports = {
    checkRectangle
}