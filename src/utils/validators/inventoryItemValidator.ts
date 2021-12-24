import joi from 'joi';

export const createInventoryItemValidator = async (data: any) => {
  const inventoryItemSchema = joi.object({
    inventoryCategory: joi.string().required(),
    itemName: joi.string().required().min(3).max(40),
    unitRate: joi.number().required(),
    quantity: joi.number().required(),
    measurementUnit: joi.string().required(),
  });
  return await inventoryItemSchema.validateAsync(data);
};

export const updateInventoryItemValidator = async (data: any) => {
  const inventoryItemSchema = joi.object({
    id: joi.string().required(),
    inventoryCategory: joi.string().required(),
    itemName: joi.string().required().min(3).max(40),
    unitRate: joi.number().required(),
    quantity: joi.number().required(),
    measurementUnit: joi.string().required(),
  });
  return await inventoryItemSchema.validateAsync(data);
};
