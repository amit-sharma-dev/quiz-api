const { Joi } = require('express-validation');

module.exports = {
    'create': {
        body: Joi.object({
            quetion: Joi.string().required(),
            options: Joi.object().required(),
            category: Joi.string().required(),
            correct: Joi.number().required()
        }),
    },
    'login': {
        body: Joi.object({
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required()
        })
    }
};