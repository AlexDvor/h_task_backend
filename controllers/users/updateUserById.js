const { User } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const updateUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(userId);
    if (!isValidId) throw new NotFound(`Contact with id: ${userId} not found`);
    const result = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserById;
