import joi from 'joi';

export const createInventoryItemValidator = async (data: any) => {
  const inventoryItemSchema = joi.object({
    inventoryCategory: joi.string().required(),
    vendor: joi.string().required(),
    itemName: joi.string().required().min(3).max(40),
    unitRate: joi.number().required(),
    quantity: joi.number().required(),
    measurementUnit: joi.string().required(),
  });
  return await inventoryItemSchema.validateAsync(data);
};

export const restockInventoryItemValidator = async (data: any) => {
  const restockInventoryItemSchema = joi.object({
    id: joi.string().required(),
    quantity: joi.number().required(),
    unitRate: joi.number().required(),
  });
  return await restockInventoryItemSchema.validateAsync(data);
};

export const updateInventoryItemValidator = async (data: any) => {
  const inventoryItemSchema = joi.object({
    id: joi.string().required(),
    inventoryCategory: joi.string(),
    vendor: joi.string(),
    itemName: joi.string().min(3).max(40),
    unitRate: joi.number(),
    quantity: joi.number(),
    measurementUnit: joi.string(),
  });
  return await inventoryItemSchema.validateAsync(data);
};
