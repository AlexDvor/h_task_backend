const { Conflict } = require("http-errors");
const { User } = require("../../models");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, surname } = req.body;
    const user = await User.findOne({ email });
    if (user) throw new Conflict(`User with this email already exists`);
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const result = await User.create({
      name,
      surname,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      status: "success",
      code: 201,
      user: {
        name: result.name,
        email: result.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
