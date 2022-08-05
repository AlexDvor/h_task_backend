const { User } = require("../../models");

const getCurrentUser = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const result = await User.findOne({ _id });
    res.json({
      status: "success",
      code: 200,
      data: {
        name: result.name,
        email: result.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
