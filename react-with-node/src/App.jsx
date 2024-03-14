import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/category/list-category")
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <div className="px-40 my-10">
        <h1 className="mb-10 font-bold text-4xl text-center text-white">
          Category Data
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {category.map((value, index) => (
            <a
              href="#"
              className="max-w-sm bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700 transition-all duration-100 ease-linear"
              key={value._id}
            >
              <img
                className="rounded-t-lg"
                src={`https://source.unsplash.com/random/870x575?sig=${
                  index + 1
                }`}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {value.category_name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {value.category_desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
