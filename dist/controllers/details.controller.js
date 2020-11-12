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
exports.DetailsController = void 0;
const common_1 = require("@nestjs/common");
const details_service_1 = require("../services/details.service");
let DetailsController = class DetailsController {
    constructor(detailService) {
        this.detailService = detailService;
    }
    getClosedTickets() {
        return this.detailService.closedTickets();
    }
    getOpenTickets() {
        return this.detailService.openTickets();
    }
    resetServer() {
        return this.detailService.resetTickets();
    }
    getPassengerDetails(ticket_id) {
        return this.detailService.passengerDetails(ticket_id);
    }
};
__decorate([
    common_1.Get('close'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "getClosedTickets", null);
__decorate([
    common_1.Get('open'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "getOpenTickets", null);
__decorate([
    common_1.Get('reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "resetServer", null);
__decorate([
    common_1.Get(':ticket_id'),
    __param(0, common_1.Param('ticket_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetailsController.prototype, "getPassengerDetails", null);
DetailsController = __decorate([
    common_1.Controller('details'),
    __metadata("design:paramtypes", [details_service_1.DetailsService])
], DetailsController);
exports.DetailsController = DetailsController;
//# sourceMappingURL=details.controller.js.map