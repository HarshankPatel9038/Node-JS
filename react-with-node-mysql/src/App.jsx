import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories, fetchCategories } from "./redux/slice/categoriesSlice";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // const categories = useSelector((state) => state.categories);
  // console.log(categories)

  const { categories, isLoading, isError } = useSelector((state) => state);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching categories.</div>;
  }

  const addData = () => {
    event.preventDefault();
    const data = {
      category_name: name,
      category_desc: desc
    };
    console.log(data);
    dispatch(addCategories(data));
  };

  // let updateData = () => {};

  // let deleteData = (id) => {
  //   console.log(id);
  //   dispatch(deleteCategories(id))
  // };

  return (
    <div>
      <h1>Categories</h1>
      <div className="form-wrapper">
        <form onSubmit={addData}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>isActive</th>
          {/* <th>Action</th> */}
        </tr>
        {categories?.data?.data?.map((value) => (
          <tr key={value._id}>
            <td>{value._id}</td>
            <td>{value.category_name}</td>
            <td>{value.category_desc}</td>
            <td>{value.isActive === 1 ? "true" : "false"}</td>
            <td>
              <div className="btn-wrapper">
                {/* <button onClick={() => updateData(value._id)}>Update</button> */}
                {/* <button onClick={() => deleteData(value._id)}>Delete</button> */}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
