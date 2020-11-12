
import { Controller,Param,Body,Post,Get,Put, Patch } from '@nestjs/common';
import { TicketsService } from 'src/services/tickets.service';

@Controller('ticket')
export class TicketsController{
    constructor(private readonly ticketService : TicketsService) {
        
    }
    @Post()
    createTicket(@Body('seat_no')seat:number,@Body('is_available')status:boolean,@Body('passenger') pass_details:any ):any{
        return this.ticketService.createTickets(seat,status,pass_details);
        
        
    }
    @Put(':ticket_id')
    updateTicket(@Param('ticket_id')ticket_id:string,@Body('is_available')status:boolean,@Body('passenger') pass_details:any ):any{
        return this.ticketService.updateTicketDetails(ticket_id,status,pass_details);
    }
   
   @Get(':ticket_id')
    getSpecificTicketStatus(@Param('ticket_id')ticket_id: string)
    {
               return this.ticketService.singleTicketStatus(ticket_id);

    }
    

}