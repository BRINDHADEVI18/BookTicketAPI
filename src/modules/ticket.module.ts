import { Module } from "@nestjs/common";
import { AppController } from "src/controllers/app.controller";
import { AppService } from "src/services/app.service";
import { TicketsController } from "src/controllers/tickets.controller";
import { TicketsService } from "src/services/tickets.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ticketSchema } from "src/models/ticket.model";
//import { userSchema } from "src/models/user.model";
import { userSchema } from '../models/user.model';

@Module({
    
   imports:[MongooseModule.forFeature([{name :'Ticket',schema:ticketSchema},{name:'User',schema:userSchema}])],
    controllers:[TicketsController, ],
    providers:[TicketsService,],
   
})
export class TicketModule{

}