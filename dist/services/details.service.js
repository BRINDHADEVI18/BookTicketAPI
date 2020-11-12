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
exports.DetailsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DetailsService = class DetailsService {
    constructor(ticketModel, userModel) {
        this.ticketModel = ticketModel;
        this.userModel = userModel;
    }
    async passengerDetails(ticket_id) {
        const ticket = await this.ticketModel.findById(ticket_id).exec();
        if (!ticket) {
            throw new common_1.NotFoundException('there is no ticket');
        }
        const user_details = await this.userModel.findById({ _id: ticket.passenger }).exec();
        if (!user_details) {
            throw new common_1.NotFoundException('Could not found passenger details');
        }
        return { name: user_details.name, gender: user_details.gender, age: user_details.age, phone: user_details.phone, email: user_details.email };
    }
    async resetTickets() {
        await this.ticketModel.updateMany({}, { is_available: 'true' }, { new: true });
        return { message: "Reset successful" };
    }
    async openTickets() {
        const tickets = await this.ticketModel.find({ is_available: 'true' }).exec();
        if (!tickets) {
            throw new common_1.NotFoundException('No tickets are opened!!');
        }
        return tickets.map((ticket) => ({ ticket_id: ticket._id, seat_no: ticket.seat_no }));
    }
    async closedTickets() {
        const tickets = await this.ticketModel.find({ is_available: 'false' }).exec();
        return tickets.map((ticket) => ({ ticket_id: ticket._id, seat_no: ticket.seat_no }));
    }
};
DetailsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Ticket')), __param(1, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], DetailsService);
exports.DetailsService = DetailsService;
//# sourceMappingURL=details.service.js.map