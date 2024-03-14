const poolPromise = require("../db");

const insertCategory = async (data) => {
  try {
    let sqlQuery = `INSERT INTO salespeople (Sname, City, Comm) VALUES (?, ?, ?)`
    let res = await poolPromise.execute(sqlQuery, [data.Sname, data.City, data.Comm]);
    console.log(data);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

const selectCategory = async () => {
  try {
    let sqlQuery = `SELECT * FROM salespeople`
    let res = await poolPromise.execute(sqlQuery);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

const listCategory = async (id) => {
  try {
    let sqlQuery = `SELECT * FROM salespeople WHERE Snum=${id}`
    let res = await poolPromise.execute(sqlQuery);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

const updateCategory = async (data, id) => {
  try {
    let sqlQuery = `UPDATE salespeople SET Sname=?, City=?, Comm=? WHERE Snum=${id}`
    let res = await poolPromise.execute(sqlQuery, [data.Sname, data.City, data.Comm]);
    console.log('data', data);
    console.log('res', res);
  } catch (error) {
    console.log('error', error.message);
  }
}

const deleteCategory = async (id) => {
  try {
    let sqlQuery = `DELETE FROM salespeople WHERE Snum=${id}`
    let res = await poolPromise.execute(sqlQuery);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  insertCategory,
  selectCategory,
  listCategory,
  updateCategory,
  deleteCategory
}