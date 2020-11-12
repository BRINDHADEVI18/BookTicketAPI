import { Model } from 'mongoose';
import { Ticket } from '../models/ticket.model';
import { User } from '../models/user.model';
export declare class DetailsService {
    private readonly ticketModel;
    private readonly userModel;
    constructor(ticketModel: Model<Ticket>, userModel: Model<User>);
    passengerDetails(ticket_id: string): Promise<{
        name: any;
        gender: any;
        age: any;
        phone: any;
        email: any;
    }>;
    resetTickets(): Promise<{
        message: string;
    }>;
    openTickets(): Promise<any>;
    closedTickets(): Promise<any>;
}
