
import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
});

export interface User extends mongoose.Document{
     _id:string;
     name: string;
    gender: string;
    age: number;
    phone:string;
    email:string;
    
}