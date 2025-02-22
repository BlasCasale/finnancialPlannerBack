"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const modeling_1 = require("../db/modeling");
const crypto_1 = __importDefault(require("crypto"));
const createUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ mail, username, password }) {
    const findUsername = yield modeling_1.User.findOne({ where: { username } });
    if (findUsername)
        throw new Error(`Ya existe un usuario con este nombre de usuario ${username}`);
    const findMail = yield modeling_1.User.findOne({ where: { mail } });
    if (findMail)
        throw new Error(`Ya existe un usuario con este mail: ${mail}`);
    const hashedPass = crypto_1.default.createHash('sha256').update(password).digest('hex');
    const user = yield modeling_1.User.create({ mail, username, password: hashedPass });
    return user;
});
exports.createUser = createUser;
