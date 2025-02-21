"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.sendMail = void 0;
const templates_1 = require("../utils/templates");
const dotenv_1 = __importDefault(require("dotenv"));
const resend_1 = require("resend");
const node_fetch_1 = __importStar(require("node-fetch"));
dotenv_1.default.config();
const variables = {
    mail: process.env.MAIL_ACCOUNT,
    apiKey: process.env.API_KEY
};
// Crear una instancia de Headers utilizando node-fetch
const headers = new node_fetch_1.Headers({ Authorization: `Bearer ${variables.apiKey}` });
// Crear una instancia de Resend y pasar la API key
const resend = new resend_1.Resend(variables.apiKey);
const sendMail = (mail, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Configurar el fetch globalmente para el envío de correos
        yield (0, node_fetch_1.default)('https://api.resend.dev/emails', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                from: variables.mail || 'onboarding@resend.dev',
                to: mail,
                subject: 'Validacion para la creación de la cuenta.',
                html: (0, templates_1.validationMail)(id)
            })
        });
        console.log('Mail sent successfully');
    }
    catch (error) {
        console.error('Error sending mail:', error);
    }
});
exports.sendMail = sendMail;
