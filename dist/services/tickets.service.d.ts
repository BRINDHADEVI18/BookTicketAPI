import { Model } from 'mongoose';
import { Ticket } from '../models/ticket.model';
import { User } from '../models/user.model';
export declare class TicketsService {
    private readonly ticketModel;
    private readonly userModel;
    constructor(ticketModel: Model<Ticket>, userModel: Model<User>);
    createTickets(seat_no: number, is_available: boolean, passenger: User): Promise<{
        message: string;
        id: any;
    }>;
    updateTicketDetails(ticket_id: string, status: boolean, pass: User): Promise<{
        message: string;
    }>;
    singleTicketStatus(ticket_id: string): Promise<{
        _id: any;
        seat_no: any;
        is_available: any;
        passenger: any;
    }>;
}
