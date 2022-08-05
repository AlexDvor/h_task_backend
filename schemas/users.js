const Joi = require("joi");

const registerJoiSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  registerJoiSchema,
  loginJoiSchema,
};
