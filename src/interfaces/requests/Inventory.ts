export interface ICreateInventoryRequestBody {
    inventoryCategory: string;
    itemName: string;
    quantity: number;
    measurementUnit: [string];
    unitRate: number;
}

export interface IUpdateInventoryRequestBody{
    id:string
    inventoryCategory: string;
    itemName: string;
    quantity: number;
    measurementUnit: [string];
    unitRate: number;
}