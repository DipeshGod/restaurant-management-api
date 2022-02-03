import joi from 'joi';

export const loginValidator = async (data: any) => {
  const loginSchema = joi.object({
    restaurant: joi.string().required(),
    password: joi.string().required(),
  });
  return await loginSchema.validateAsync(data);
};
