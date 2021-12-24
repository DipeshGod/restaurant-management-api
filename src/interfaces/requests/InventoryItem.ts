export interface ICreateInventoryItemRequestBody {
  inventoryCategory: string;
  itemName: string;
  quantity: number;
  measurementUnit: string;
  unitRate: number;
}

export interface IUpdateInventoryItemRequestBody {
  id: string;
  inventoryCategory?: string;
  itemName?: string;
  quantity?: number;
  measurementUnit?: string;
  unitRate?: number;
}