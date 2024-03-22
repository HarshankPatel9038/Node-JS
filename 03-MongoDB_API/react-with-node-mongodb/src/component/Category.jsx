import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../redux/slice/categorySlice";
import { IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";

const Category = () => {
  const [addClass, setAddClass] = useState("close");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isActive, setIsActive] = useState("");
  const [edit, setEdit] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const { category, isLoading, isError } = useSelector((state) => state);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching category.</div>;
  }

  let updateData = async (id) => {
    setEdit(id);
    const categoryToEdit = category?.data?.data?.find(
      (value) => value._id === id
    );
    if (categoryToEdit) {
      setName(categoryToEdit.category_name);
      setDesc(categoryToEdit.category_desc);
      setIsActive(categoryToEdit.isActive ? "true" : "false");
    }
    setAddClass("open");
  };

  let deleteData = async (id) => {
    await dispatch(deleteCategory(id));
    dispatch(getCategory());
  };

  const addData = async () => {
    event.preventDefault();
    if (edit) {
      const data = {
        category_name: name,
        category_desc: desc,
        isActive: isActive === "true" ? 1 : 0,
      };
      if (data.category_name) {
        await dispatch(updateCategory({ id: edit, updateData: data }));
      }
    } else {
      const data = {
        _id: id,
        category_name: name,
        category_desc: desc,
      };
      if (data.category_name) {
        await dispatch(addCategory(data));
      }
    }
    setName("");
    setDesc("");
    setIsActive("");
    dispatch(getCategory());
    setEdit(null);
    setAddClass("close");
  };

  return (
    <div className="table_content_wrapper">
      <div className="table_title_btn_wrapper">
        <h1>Category</h1>
        <button onClick={() => setAddClass("open")} className="add_data">
          Add Data
        </button>
      </div>
      <div className={`form_wrapper ${addClass}`}>
        <form onSubmit={addData}>
          <div className="form_title_wrapper">
            <h2>{edit ? "Update Category" : "Add Category"}</h2>
            <button>
              <IoClose className="close_btn" />
            </button>
          </div>
          <input
            type="text"
            value={id}
            placeholder="Id"
            onChange={(e) => setId(e.target.value)}
            style={{ display: edit ? "none" : "block" }}
          />
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows={5}
            value={desc}
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
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
          <th className="id">Id</th>
          <th className="name">Name</th>
          <th className="desc">Description</th>
          <th className="img">Image</th>
          <th className="is_active">isActive</th>
          <th className="created">createdAt</th>
          <th className="updated">updatedAt</th>
          <th className="action">Action</th>
        </tr>
        {category?.data?.data?.map((value, index) => (
          <tr key={value._id}>
            <td>{value._id < 10 ? '0' + value._id : value._id}</td>
            <td>{value.category_name}</td>
            <td>{value.category_desc}</td>
            <td>
              <div className="img_wrapper">
                <img
                  src={`https://source.unsplash.com/random/100x100?sig=${
                    index + 1
                  }`}
                  alt="category-image"
                />
              </div>
            </td>
            <td>
              <div className="active_wrapper">
                <span
                  className="active_status"
                  style={{
                    backgroundColor: value.isActive ? "#58c223" : "#cc3333",
                  }}
                ></span>
                <span>{value.isActive ? "true" : "false"}</span>
              </div>
            </td>
            <td>{value.createdAt}</td>
            <td>{value.updatedAt}</td>
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
