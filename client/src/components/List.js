import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function List() {
  const [todos, setTodos] = useState([0]);

  // Fetch Todos Request
  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get("http://127.0.0.1:5000/api/todos/");
      console.log(response.data);
      setTodos(response.data);
      console.log(todos);
    };
    getAll();
  }, []);


 // Delete Handle
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://127.0.0.1:5000/api/todos/${id}`);
      let update = todos.filter((item) => item._id !== id);
      setTodos(update);
    } catch (e) {}
  };

  return (
    <div>
      <button type="button" class="btn btn-success">
        <a href="/add">Add Todo</a>
      </button>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((val, id) => {
            return (
              <tr key={id} class="table">
                <td>
                  <h5> {val.title}</h5>
                </td>
                <td>
                  <h6>{val.description}</h6>
                </td>
                <td>
                  <Link to={`/edit/${val._id}`}>Edit</Link>
                </td>
                <td>
                  <Link onClick={() => handleDelete(val._id)}>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
