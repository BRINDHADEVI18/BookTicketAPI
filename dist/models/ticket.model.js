"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketSchema = void 0;
const mongoose = require("mongoose");
exports.ticketSchema = new mongoose.Schema({
    seat_no: { type: Number, min: 1, max: 40, required: true, unique: true },
    is_available: { type: Boolean, default: true },
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=ticket.model.js.map