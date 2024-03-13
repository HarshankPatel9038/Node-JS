// const pool = require('./db');

const listCategories = async (req, res) => {

    try {
        // const category = await pool.query("SELECT * FROM salespeople");

        console.log('category');

        // if (!category || category.length === 0) {
        //     return res.status(404).json({
        //         success: false,
        //         message: 'No categories found'
        //     });
        // }

        // return res.status(200).json({
        //     success: true,
        //     data: category,
        //     message: 'Get Category List Successfully'
        // });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    listCategories
}