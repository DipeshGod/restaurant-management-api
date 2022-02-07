import joi from 'joi';

export const createInventoryItemValidator = async (data: any) => {
  const inventoryItemSchema = joi.object({
    inventoryCategory: joi.string().required(),
    itemName: joi.string().required().min(3).max(40),
    measurementUnit: joi.array().items(joi.string()).required(),
  });
  return await inventoryItemSchema.validateAsync(data);
};

export const restockInventoryItemValidator = async (data: any) => {
  const restockInventoryItemSchema = joi.object({
    inventoryItem: joi.array().items(joi.string()).required(),
    quantity: joi.number().required(),
    unitRate: joi.number().required(),
    cashPaid: joi.number().required(),
    cashRemaining: joi.number().required(),
    vendor: joi.string().required(),
    paidTotal: joi.boolean().required(),
    billImage: joi.string().optional(),
  });
  return await restockInventoryItemSchema.validateAsync(data);
};
