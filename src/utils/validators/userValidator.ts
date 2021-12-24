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

export const updateUserValidator = async (data: any) => {
  const createUserSchema = joi.object({
    id: joi.string().required(),
    name: joi.string().optional().min(5).max(30),
    password: joi.string().optional().min(5).max(30),
    salary: joi.number().optional().min(12000),
    role: joi
      .array()
      .optional()
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
