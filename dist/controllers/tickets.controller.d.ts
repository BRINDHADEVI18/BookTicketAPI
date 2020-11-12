import { TicketsService } from 'src/services/tickets.service';
export declare class TicketsController {
    private readonly ticketService;
    constructor(ticketService: TicketsService);
    createTicket(seat: number, status: boolean, pass_details: any): any;
    updateTicket(ticket_id: string, status: boolean, pass_details: any): any;
    getSpecificTicketStatus(ticket_id: string): Promise<{
        _id: any;
        seat_no: any;
        is_available: any;
        passenger: any;
    }>;
}
