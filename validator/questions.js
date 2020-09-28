const { Joi } = require('express-validation');

module.exports = {
    'create': {
        body: Joi.object({
            email: Joi.when('type', { is: 'email', then: Joi.string().email({ minDomainSegments: 2 }).required(), otherwise: Joi.forbidden() }),
            password: Joi.string()
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
            name: Joi.string(),
            mobile: Joi.string()
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