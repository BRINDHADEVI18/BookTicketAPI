"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
});
//# sourceMappingURL=user.model.js.map