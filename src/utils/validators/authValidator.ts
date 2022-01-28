import joi from 'joi';

export const loginValidator = async (data: any) => {
  const loginSchema = joi.object({
    restaurant: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required(),
  });
  return await loginSchema.validateAsync(data);
};

export const adminLoginValidator = async (data: any) => {
  const loginSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
  });
  return await loginSchema.validateAsync(data);
};
