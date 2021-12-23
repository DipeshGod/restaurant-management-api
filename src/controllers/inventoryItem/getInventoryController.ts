import {Request,Response} from 'express';
import { Inventory } from '../../models/Inventory';

const getInventoryController = async(req:Request,res:Response)=>{
    try{
        const inventories = await Inventory.find({});
        res.json({inventories})
    }catch(err:any  ){
        res.status(400).json({err})
    }
}

export {getInventoryController}