
import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model} from 'mongoose';
import { Ticket} from '../models/ticket.model';
import{User} from '../models/user.model';

@Injectable()
export class DetailsService{
  //  tickets:Ticket[]=[];
    constructor(
        @InjectModel('Ticket') private readonly ticketModel:Model<Ticket>,@InjectModel('User') private readonly userModel:Model<User>,){

    }



   async passengerDetails(ticket_id:string,)
   {
       
       const ticket=await this.ticketModel.findById(ticket_id).exec();
       if(!ticket)
       {
           throw new NotFoundException('there is no ticket');
       }
       const user_details=await this.userModel.findById({_id:ticket.passenger}).exec();
       if(!user_details)
       {
           throw new NotFoundException('Could not found passenger details');
       }
       return {name:user_details.name,gender:user_details.gender,age:user_details.age,phone:user_details.phone,email:user_details.email};


   }
   async resetTickets(){
    
    await this.ticketModel.updateMany({},{is_available:'true'},{new:true});


     return {message:"Reset successful"};
    

       
   }
   async openTickets()
   {
       const tickets=await this.ticketModel.find({is_available:'true'}).exec();
       if(!tickets)
       {
           throw new NotFoundException('No tickets are opened!!');
       }
       return tickets.map((ticket)=>({ticket_id:ticket._id,seat_no:ticket.seat_no}));

   }
   async closedTickets(){

       const tickets=await this.ticketModel.find({is_available:'false'}).exec();
       return tickets.map((ticket)=>({ticket_id:ticket._id,seat_no:ticket.seat_no})) ;
   }
}