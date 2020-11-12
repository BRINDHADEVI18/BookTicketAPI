import { Module } from "@nestjs/common";
import { AppController } from "src/controllers/app.controller";
import { AppService } from "src/services/app.service";

import { MongooseModule } from "@nestjs/mongoose";

import { ticketSchema } from "src/models/ticket.model";

import { userSchema } from '../models/user.model';
import { DetailsService } from 'src/services/details.service';
import { DetailsController } from 'src/controllers/details.controller';

@Module({
    
   imports:[MongooseModule.forFeature([{name :'Ticket',schema:ticketSchema},{name:'User',schema:userSchema}])],
    controllers:[DetailsController],
    providers:[DetailsService],
   
})
export class DetailModule{

}