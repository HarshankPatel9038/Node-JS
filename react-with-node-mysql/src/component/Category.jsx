import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../redux/slice/categoriesSlice";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";

const Category = () => {
  const [addClass, setAddClass] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isActive, setIsActive] = useState("");
  const [edit, setEdit] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { categories, isLoading, isError } = useSelector((state) => state);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching categories.</div>;
  }

  let updateData = async (id) => {
    setEdit(id);
    const categoryToEdit = categories?.data?.data?.find(
      (value) => value._id === id
    );
    if (categoryToEdit) {
      setName(categoryToEdit.category_name);
      setDesc(categoryToEdit.category_desc);
      setIsActive(categoryToEdit.isActive === 1 ? true : false);
    }
    setAddClass("open");
  };

  let deleteData = async (id) => {
    await dispatch(deleteCategories(id));
    dispatch(getCategories());
  };

  const addData = async () => {
    event.preventDefault();
    if (edit) {
      const data = {
        category_name: name,
        category_desc: desc,
        isActive: isActive === true ? 1 : 0,
      };
      if (
        data.category_name &&
        data.category_desc !== "" &&
        data.isActive !== ""
      ) {
        await dispatch(updateCategories({ id: edit, updateData: data }));
      }
    } else {
      const data = {
        category_name: name,
        category_desc: desc,
      };
      if (data.category_name && data.category_desc !== "") {
        await dispatch(addCategories(data));
      }
    }
    setName("");
    setDesc("");
    setIsActive("");
    dispatch(getCategories());
    setEdit(null);
    setAddClass("");
  };

  return (
    <div className="table_content_wrapper">
      <div className="table_title_btn_wrapper">
        <h1>Categories</h1>
        <button onClick={() => setAddClass("open")} className="add_data">
          Add Data
        </button>
      </div>
      <div className={`form_wrapper ${addClass}`}>
        <form onSubmit={addData}>
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={desc}
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          {/* <input
            type="text"
            value={isActive}
            placeholder="isActive"
            onChange={(e) => setIsActive(e.target.value)}
            style={{ display: edit ? "block" : "none" }}
          /> */}
          <select
            className="select_wrapper"
            value={isActive}
            onChange={(e) => setIsActive(e.target.value)}
            style={{ display: edit ? "block" : "none" }}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
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
            <td>
              <div className="active_wrapper">
                <span
                  className="active_status"
                  style={{
                    backgroundColor:
                      value.isActive === 1 ? "#58c223" : "#cc3333",
                  }}
                ></span>
                <span>{value.isActive === 1 ? "true" : "false"}</span>
              </div>
            </td>
            <td>
              <div className="btn_wrapper">
                <button onClick={() => updateData(value._id)}>
                  <FiEdit className="edit_icon" />
                </button>
                <button onClick={() => deleteData(value._id)}>
                  <AiTwotoneDelete className="delete_icon" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Category;
