const pick = (object, keys) => {
    console.log(object.hasOwnProperty(keys))
    return keys.reduce((obj) => {
        if (object && object.hasOwnProperty(keys)) {
            obj[keys] = object[keys]
        }
        return obj;
    }, {})
}

module.exports = pick;