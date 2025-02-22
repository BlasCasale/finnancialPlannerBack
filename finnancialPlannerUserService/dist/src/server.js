"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./routes/user.routes");
exports.server = (0, express_1.default)();
exports.server.use((0, morgan_1.default)('dev'));
exports.server.use(body_parser_1.default.json());
exports.server.use(body_parser_1.default.urlencoded({ extended: true }));
exports.server.use((0, cors_1.default)());
exports.server.use(user_routes_1.userRouter);
exports.server.use('*', (_req, res) => {
    res.status(404).json({ error: 'Por favor ingrese un endpoint válido.' });
});
