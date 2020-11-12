"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../controllers/app.controller");
const app_service_1 = require("../services/app.service");
const tickets_controller_1 = require("../controllers/tickets.controller");
const tickets_service_1 = require("../services/tickets.service");
const mongoose_1 = require("@nestjs/mongoose");
const ticket_model_1 = require("../models/ticket.model");
const user_model_1 = require("../models/user.model");
let TicketModule = class TicketModule {
};
TicketModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Ticket', schema: ticket_model_1.ticketSchema }, { name: 'User', schema: user_model_1.userSchema }])],
        controllers: [tickets_controller_1.TicketsController,],
        providers: [tickets_service_1.TicketsService,],
    })
], TicketModule);
exports.TicketModule = TicketModule;
//# sourceMappingURL=ticket.module.js.map