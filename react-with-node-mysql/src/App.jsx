import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./redux/slice/categoriesSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const categories = useSelector((state) => state.categories);
  // console.log(categories)

  const { categories, isLoading, isError } = useSelector((state) => state);
  console.log(categories);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching categories.</div>;
  }

  let updateData = () => {}

  let deleteData = () => {}

  return (
    <div>
      <h1>Categories</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>isActive</th>
          <th>Action</th>
        </tr>
        {categories?.data?.data?.map((value) => (
          <tr key={value._id}>
            <td>{value._id}</td>
            <td>{value.category_name}</td>
            <td>{value.category_desc}</td>
            <td>{value.isActive === 1 ? "true" : "false"}</td>
            <td>
              <div className="btn-wrapper">
                <button onClick={() => updateData(value._id)}>Update</button>
                <button onClick={() => deleteData(value._id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
