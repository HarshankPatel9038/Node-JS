const poolPromise = require("../db");

const insertCategory = async (data) => {
  try {
    let sqlQuery = `INSERT INTO categories (category_name, category_desc, isActive) VALUES (?, ?, ?)`
    let [rows] = await poolPromise.execute(sqlQuery, [data.category_name, data.category_desc, data.isActive]);
    return rows;
  } catch (error) {
    throw error.message
  }
}

const selectCategory = async () => {
  try {
    let sqlQuery = `SELECT * FROM categories`
    let [rows] = await poolPromise.execute(sqlQuery);
    return rows;
  } catch (error) {
    throw error.message
  }
}

const listCategory = async (id) => {
  try {
    let sqlQuery = `SELECT * FROM categories WHERE _id=${id}`
    let [rows] = await poolPromise.execute(sqlQuery);
    return rows;
  } catch (error) {
    throw error.message
  }
}

const updateCategory = async (data, id) => {
  try {
    let sqlQuery = `UPDATE categories SET category_name=?, category_desc=?, isActive=? WHERE _id=${id}`
    let [rows] = await poolPromise.execute(sqlQuery, [data.category_name, data.category_desc, data.isActive]);
    return rows;
  } catch (error) {
    throw error.message
  }
}

const deleteCategory = async (id) => {
  try {
    let sqlQuery = `DELETE FROM categories WHERE _id=${id}`
    let [rows] = await poolPromise.execute(sqlQuery);
    return rows;
  } catch (error) {
    throw error.message
  }
}

module.exports = {
  insertCategory,
  selectCategory,
  listCategory,
  updateCategory,
  deleteCategory
}