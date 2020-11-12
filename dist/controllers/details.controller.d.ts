import { DetailsService } from 'src/services/details.service';
export declare class DetailsController {
    private readonly detailService;
    constructor(detailService: DetailsService);
    getClosedTickets(): Promise<any>;
    getOpenTickets(): Promise<any>;
    resetServer(): Promise<{
        message: string;
    }>;
    getPassengerDetails(ticket_id: string): Promise<{
        name: any;
        gender: any;
        age: any;
        phone: any;
        email: any;
    }>;
}
