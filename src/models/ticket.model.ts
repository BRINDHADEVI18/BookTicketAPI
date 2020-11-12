
import * as mongoose from 'mongoose';
import {User} from './user.model';

export const ticketSchema=new mongoose.Schema({
   // _id:mongoose.Schema.Types.ObjectId,
    seat_no: {type:Number,min:1,max:40,required:true,unique:true},
    is_available:{ type: Boolean,default:true},
    passenger:{type: mongoose.Schema.Types.ObjectId,ref:'User'},
   
});

export interface Ticket extends mongoose.Document{
 
     _id:string;
     seat_no: number;
     is_available: boolean;
     passenger: string;
        
    
}