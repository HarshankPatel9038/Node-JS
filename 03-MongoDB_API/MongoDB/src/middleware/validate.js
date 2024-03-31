const pick = require("../util/pick");
const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
    // console.log(schema);
    // console.log(Object.keys(schema));

    const object = pick(req, Object.keys(schema));
    // console.log(object);

    const { error, value } = Joi.compile(schema)
        .prefs({
            abortEarly: false
        })
        .validate(object);


    if (error) {
        console.log(error.details.message)
        let message = error.details.map((value) => value.message).join(",");
        console.log(message);

        return res.status(400).json({
            success: false,
            message: message
        });
    }

    Object.assign(req, value);

    return next();
}

module.exports = validate;