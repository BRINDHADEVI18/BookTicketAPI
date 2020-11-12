import * as mongoose from 'mongoose';
export declare const userSchema: any;
export interface User extends mongoose.Document {
    _id: string;
    name: string;
    gender: string;
    age: number;
    phone: string;
    email: string;
}
