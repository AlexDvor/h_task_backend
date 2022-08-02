const { User } = require("../../models");

const getFavoriteList = async (req, res, next) => {
  try {
    const result = await User.find({});
    res.json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getFavoriteList;
