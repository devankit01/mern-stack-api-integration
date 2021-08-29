import React from 'react'
import { useEffect, useState } from "react";
// import List from './List'
import axios from "axios";



function Add() {

    const [value, setValue] = useState()
    const [status, setStatus] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(value);

        try{
            await axios.post("http://127.0.0.1:5000/api/todos/", value);
            setStatus(true);
            
        }catch(e){
            
        }

       
    }

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
          });
        // console.log(value);
    }

    // if(status){
    //     return <List />
    // }
 
    return (
        <div  class="container" >
            <form >
            <div class="form-group">
                <label  class="form-label mt-4">Enter Title</label>
                <input type="text" class="form-control"  placeholder="Enter Title" name="title" onChange={handleChange} />
            </div>      
            <div class="form-group">
                <label  class="form-label mt-4">Enter Description</label>
                <input type="text" class="form-control"  placeholder="Enter Description" name="description" onChange={handleChange} />
            </div>     
            <br />
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Add
