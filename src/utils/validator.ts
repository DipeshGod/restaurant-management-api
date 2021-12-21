import joi from 'joi';

export const createUserValidator = async (data: any) => {
  const createUserSchema = joi.object({
    name: joi.string().required().min(5).max(30),
    password: joi.string().required().min(5).max(30),
    salary: joi.number().optional().min(10000),
    role: joi
      .array()
      .items(
        joi
          .string()
          .valid(
            'owner',
            'inventoryManager',
            'vendors',
            'waiter',
            'kitchenOrderManager',
            'barOrderManager',
            'cashier',
            'accountant',
            'members'
          )
      ),
  });

  return await createUserSchema.validateAsync(data);
};

export const loginValidator = async (data: any) => {
  const loginSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
  });
  return await loginSchema.validateAsync(data);
};
