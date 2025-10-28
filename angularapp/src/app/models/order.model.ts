import { Product } from "puppeteer";
import { User } from "./user.model";

export interface Order {
    orderId?:number;
    user:User;
    product:Product[];
    shippingAddress:string;
    totalAmount:number;
    qunatity:number;
    status:string;
    createdAt:Date;
    updatedAt:Date;
}
