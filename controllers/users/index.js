const getCurrentUser = require("./getCurrentUser");
const getAllUsers = require("./getAllUsers");
const updateUserById = require("./updateUserById");
const removeUserById = require("./removeUserById");
const createUser = require("./createUser");

module.exports = {
  getCurrentUser,
  removeUserById,
  updateUserById,
  getAllUsers,
  createUser,
};
