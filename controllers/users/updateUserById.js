const { User } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("🚀 - id", id);
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) throw new NotFound(`Contact with id: ${id} not found`);
    const result = await User.findByIdAndUpdate(id);
    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserById;
