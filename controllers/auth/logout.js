const { User } = require("../../models");

const logout = async (req, res, next) => {
  try {
    const { _id } = req.user;
    console.log("🚀 - _id", _id);
    await User.findByIdAndUpdate(_id, { token: null });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
