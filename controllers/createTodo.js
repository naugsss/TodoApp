const Todo = require("../models/Todo");

// define route handler

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const respone = await Todo.create({ title, description });
    console.log(respone);
    res.status(200).json({
      success: true,
      message: "Todo created successfully",
      data: respone,
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: err.message, success: false, data: "error found" });
  }
};
