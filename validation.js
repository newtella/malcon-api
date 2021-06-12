const Joi = require('joi');

//Esquema para la validacion
const registerValidation = req => {
    const reqSchema = Joi.object({
        fullname: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    });
    return reqSchema.validate(req);
};

const loginValidation = req => {
    const reqSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    });
    return reqSchema.validate(req);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;