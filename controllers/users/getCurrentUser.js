const { User } = require("../../models");

const getCurrentUser = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findOne({ _id });

  res.json({
    status: "success",
    code: 200,
    data: {
      name: result.name,
      email: result.email,
    },
  });
};

module.exports = getCurrentUser;
