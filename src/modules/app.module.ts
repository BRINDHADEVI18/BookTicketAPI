import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket.module';
import {DetailModule} from './detail.module';
import { DetailsController } from 'src/controllers/details.controller';

@Module({
  imports: [TicketModule,DetailModule,MongooseModule.forRoot('mongodb+srv://Brindha_18:Radha@18@node-rest-api.tkj50.mongodb.net/ticketAPI?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
