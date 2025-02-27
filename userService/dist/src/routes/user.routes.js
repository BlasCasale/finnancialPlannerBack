"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const getUserByUsernameHandler_1 = require("../handler/getUserByUsernameHandler");
const middlewareUser_1 = require("../middleware/middlewareUser");
const createUserHandler_1 = require("../handler/createUserHandler");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/getByUsername', [middlewareUser_1.validatePasswordQuery, middlewareUser_1.validateUserNameQuery], getUserByUsernameHandler_1.getUserByUsernameHandler);
exports.userRouter.post('/createUser', [middlewareUser_1.validatePasswordBody, middlewareUser_1.validateMailBody, middlewareUser_1.validateUserNameBody], createUserHandler_1.createUserHandler);
exports.default = exports.userRouter;
