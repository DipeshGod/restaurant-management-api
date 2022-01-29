import joi from 'joi';

export const createAdminValidator = async (data: any) => {
  const createAdminSchema = joi.object().keys({
    name: joi.string().required(),
    password: joi.string().required(),
  });

  return await createAdminSchema.validateAsync(data);
};

export const createRestaurantOwnerValidator = async (data: any) => {
  const createRestaurantOwnerSchema = joi.object().keys({
    restaurant: joi.string().required(),
    name: joi.string().required(),
    password: joi.string().required(),
  });

  return await createRestaurantOwnerSchema.validateAsync(data);
};

export const createUserValidator = async (data: any) => {
  const createUserSchema = joi.object({
    name: joi.string().required().min(5).max(30),
    password: joi.string().required().min(5).max(30),
    salary: joi.number().optional().min(0),
    role: joi
      .array()
      .items(
        joi
          .string()
          .valid(
            'Owner',
            'Inventory Manager',
            'Vendor',
            'Waiter',
            'Kitchen Order Manager',
            'Bar Order Manager',
            'Cashier',
            'Accountant',
            'Member'
          )
      )
      .required(),
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
            'Owner',
            'Inventory Manager',
            'Vendors',
            'Waiter',
            'kitchen Order Manager',
            'Bar Order Manager',
            'Cashier',
            'Accountant',
            'Members'
          )
      ),
  });

  return await createUserSchema.validateAsync(data);
};
