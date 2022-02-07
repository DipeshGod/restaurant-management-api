export interface ICreateInventoryItemRequestBody {
  inventoryCategory: string;
  itemName: string;
  measurementUnit: [string];
}

export interface IRestockInventoryItemRequestBody {
  inventoryItem: [string];
  vendor: string;
  cashRemaining: number;
  cashPaid: number;
  paidTotal: boolean;
  billImage: string;
}
