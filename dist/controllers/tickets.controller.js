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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsController = void 0;
const common_1 = require("@nestjs/common");
const tickets_service_1 = require("../services/tickets.service");
let TicketsController = class TicketsController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    createTicket(seat, status, pass_details) {
        return this.ticketService.createTickets(seat, status, pass_details);
    }
    updateTicket(ticket_id, status, pass_details) {
        return this.ticketService.updateTicketDetails(ticket_id, status, pass_details);
    }
    getSpecificTicketStatus(ticket_id) {
        return this.ticketService.singleTicketStatus(ticket_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('seat_no')), __param(1, common_1.Body('is_available')), __param(2, common_1.Body('passenger')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, Object]),
    __metadata("design:returntype", Object)
], TicketsController.prototype, "createTicket", null);
__decorate([
    common_1.Put(':ticket_id'),
    __param(0, common_1.Param('ticket_id')), __param(1, common_1.Body('is_available')), __param(2, common_1.Body('passenger')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Object)
], TicketsController.prototype, "updateTicket", null);
__decorate([
    common_1.Get(':ticket_id'),
    __param(0, common_1.Param('ticket_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TicketsController.prototype, "getSpecificTicketStatus", null);
TicketsController = __decorate([
    common_1.Controller('ticket'),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService])
], TicketsController);
exports.TicketsController = TicketsController;
//# sourceMappingURL=tickets.controller.js.map