import { Controller,Param,Body,Post,Get,Put, Patch } from '@nestjs/common';
import { DetailsService } from 'src/services/details.service';

@Controller('details')
export class DetailsController{
    constructor(private readonly detailService : DetailsService) {

         
    }
    @Get('close')
    getClosedTickets(){
        
        return this.detailService.closedTickets();               
     }
     @Get('open')
    getOpenTickets(){
           
        return this.detailService.openTickets();               
     }
      @Get('tickets')
     getAllTickets()
     {
         return this.detailService.AllTickets();
     }
     @Get('reset')
     resetServer()
     {
         return this.detailService.resetTickets();
     }
    @Get(':ticket_id')
     getPassengerDetails(@Param('ticket_id')ticket_id: string)
     {
                return this.detailService.passengerDetails(ticket_id);
 
     }
 
        
}
