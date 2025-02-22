"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const User_1 = require("../Model/User");
const db_1 = require("./db");
exports.User = (0, User_1.UserFunc)(db_1.db);
