const express = require("express");
const Todo = require("../model/Todo"); // Model Import

const route = express.Router();

// POST Request
route.post("/todos", async (req, res) => {
    // res.send('Todo Post');
    console.log(req.body);
    try {
        const todo = await Todo.create(req.body);
        res.json({
            data: req.data
        });
    } catch (err) {
        console.error(err);
    }
});


// Fetch Todos
route.get("/todos", async (req, res) => {
    console.log('Fetch Req.')
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (err) {
        console.log(err)
    }

});

// Fetch Todos
route.get("/todos/:id", async (req, res) => {
    console.log('Fetch Req. for Single Todo')
    try {
        const todo = await Todo.findById(req.params.id)
        res.json(todo)
    } catch (err) {
        console.log(err)
    }

});

// Update Todos
route.put("/todos/:id", async (req, res) => {
    console.log('Fetch Req. for Single Todo')
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
        }, {
            new: true,
            runValidators: true,
        })
        res.json(todo)
    } catch (err) {
        console.log(err)
    }

});

// Delete Todo
route.delete("/todos/:id", async (req, res) => {
    console.log('Fetch Req. for Single Todo')
    try {
        console.log(req.params.id)
        const todo = await Todo.remove({_id:req.params.id});
        res.json(todo)
    } catch (err) {
        console.log(err)
    }

});



module.exports = {
    route
};