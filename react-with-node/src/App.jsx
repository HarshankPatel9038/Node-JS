import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [category, setCategory] = useState([]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/category/list-category")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(id, name, desc)

    await axios.post(
      "http://localhost:3000/api/v1/category/create-category",
      {
        _id: id,
        category_name: name,
        category_desc: desc,
        category_image: img
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  // const deleteCategory = async (id) => {
  //   await axios.delete(
  //     "http://localhost:3000/api/v1/category/delete-category/" + id
  //   );
  // };

  return (
    <>
      <form
        action=""
        className="flex justify-center gap-4 px-16 pt-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="category-id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setId(e.target.value)}
          placeholder="Category Id"
          required
        />
        <input
          type="text"
          id="category-id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setImg(e.target.value)}
          placeholder="Category Img Url"
          required
        />
        <input
          type="text"
          id="category-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          required
        />
        <input
          type="text"
          id="category-desc"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Category Description"
          required
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add
        </button>
      </form>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-10 px-16">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {category.map((value) => (
              <tr
                key={value._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-3">{value._id}</td>
                <td className="px-6 py-3">{value.category_name}</td>
                <td className="px-6 py-3">{value.category_desc}</td>
                <td className="px-6 py-3">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    // onClick={(value) => deleteCategory(value._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
