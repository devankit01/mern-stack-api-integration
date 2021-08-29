import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Edit() {
    // Get Edit ID
  let { id } = useParams();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
    // console.log(value);
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(todo);
    try {
      await axios.put(`http://127.0.0.1:5000/api/todos/${id}`, todo);
    } catch (e) {}
  };


    //   Get Edit Data
  useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/todos/${id}`
        );
        console.log(response.data);
        setTodo(response.data);
        console.log(todo);
      } catch {}
    };
    get();
  }, [id]);

  return (
    <div>
      Edit: {id}
      <form>
        <div class="form-group">
          <label class="form-label mt-4"> Enter Title </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Title"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />{" "}
        </div>{" "}
        <div class="form-group">
          <label class="form-label mt-4"> Enter Description </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Description"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
        </button>
      </form>
    </div>
  );
}

export default Edit;
