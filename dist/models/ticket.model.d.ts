import * as mongoose from 'mongoose';
export declare const ticketSchema: any;
export interface Ticket extends mongoose.Document {
    _id: string;
    seat_no: number;
    is_available: boolean;
    passenger: string;
}
