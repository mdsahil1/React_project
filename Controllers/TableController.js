const TableModel = require("../model/TableModel.js");

module.exports.getToDo = async (req, res) => {
    const todo = await TableModel.find();
    res.send(todo);
}