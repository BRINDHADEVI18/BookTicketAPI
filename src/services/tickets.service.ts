import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model} from 'mongoose';
import { Ticket} from '../models/ticket.model';
import{User, userSchema} from '../models/user.model';

@Injectable()
export class TicketsService{
  //  tickets:Ticket[]=[];
    constructor(
        @InjectModel('Ticket') private readonly ticketModel:Model<Ticket>,@InjectModel('User') private readonly userModel:Model<User>,){

    }
     async createTickets(seat_no: number,is_available:boolean,passenger: User)
    {
      if(passenger){
          const newUser=new this.userModel(passenger);
          const result= await newUser.save();

          
        const newTicket=new this.ticketModel({seat_no,is_available,passenger:result._id});
       const res= await newTicket.save();
        console.log(res);
        return {message:"ticket created successfully!!",id:res._id} ;
     }
     else{
         const newTicket=new this.ticketModel({seat_no,is_available,passenger});
         const res=await newTicket.save();
         console.log(res);
         return {message:"ticket created successfully!!",id:res._id} ;
     }

    }
    async updateTicketDetails(ticket_id : string,status:boolean,pass:User)
    {
                const ticket=await this.ticketModel.findById(ticket_id).exec();
                if(!ticket)
                {
                    throw new NotFoundException('Ticket is not found!')
                }
        else{
            ticket.is_available=status;
            if(ticket.passenger!=null){
               const newPassenger=await this.userModel.findByIdandUpdate({_id:ticket.passenger},{name:pass.name,gender:pass.gender,age:pass.age,phone:pass.phone,email:pass.email}).exec(); 
                if(!newPassenger)
                {
                    throw new NotFoundException('passenger not found in user collection');
                }
              

            }
            else{
                const  newUSer= new this.userModel(pass);
                
                const res=await newUSer.save();
                ticket.passenger=res._id;
                
            }
            const result=await ticket.save();
   
            return {message:"updated successfully"};
        }
              }
    async singleTicketStatus(ticket_id:string)
    {
                const ticket= await this.ticketModel.findById(ticket_id).exec();
                if(!ticket)
                {
                    throw new NotFoundException('ticket is not available so there is no status')
                }
                return {_id: ticket._id, seat_no:ticket.seat_no, is_available:ticket.is_available,passenger:ticket.passenger};
    }
 
}
