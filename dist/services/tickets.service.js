"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TicketsService = class TicketsService {
    constructor(ticketModel, userModel) {
        this.ticketModel = ticketModel;
        this.userModel = userModel;
    }
    async createTickets(seat_no, is_available, passenger) {
        if (passenger) {
            const newUser = new this.userModel(passenger);
            const result = await newUser.save();
            const newTicket = new this.ticketModel({ seat_no, is_available, passenger: result._id });
            const res = await newTicket.save();
            console.log(res);
            return { message: "ticket created successfully!!", id: res._id };
        }
        else {
            const newTicket = new this.ticketModel({ seat_no, is_available, passenger });
            const res = await newTicket.save();
            console.log(res);
            return { message: "ticket created successfully!!", id: res._id };
        }
    }
    async updateTicketDetails(ticket_id, status, pass) {
        const ticket = await this.ticketModel.findById(ticket_id).exec();
        if (!ticket) {
            throw new common_1.NotFoundException('Ticket is not found!');
        }
        else {
            ticket.is_available = status;
            if (ticket.passenger != null) {
                const newPassenger = await this.userModel.findByIdandUpdate({ _id: ticket.passenger }, { name: pass.name, gender: pass.gender, age: pass.age, phone: pass.phone, email: pass.email }).exec();
                if (!newPassenger) {
                    throw new common_1.NotFoundException('passenger not found in user collection');
                }
            }
            else {
                const newUSer = new this.userModel(pass);
                const res = await newUSer.save();
                ticket.passenger = res._id;
            }
            const result = await ticket.save();
            return { message: "updated successfully" };
        }
    }
    async singleTicketStatus(ticket_id) {
        const ticket = await this.ticketModel.findById(ticket_id).exec();
        if (!ticket) {
            throw new common_1.NotFoundException('ticket is not available so there is no status');
        }
        return { _id: ticket._id, seat_no: ticket.seat_no, is_available: ticket.is_available, passenger: ticket.passenger };
    }
};
TicketsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Ticket')), __param(1, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map