import * as Joi from 'joi';

export const JoiValidationsSchemaConfig = Joi.object({
  DATABASE_URL: Joi.required(),
  PORT: Joi.number().default(3001),
  API_URL: Joi.required().default('http://localhost'),
  JWT_SECRET: Joi.required().default('R@NCODE'),
  JWT_EXPIRES_IN: Joi.required().default('1h'),
});
