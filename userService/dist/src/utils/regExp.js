"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passRegex = exports.nameRegex = exports.mailRegex = exports.uuidRegex = void 0;
exports.uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
exports.mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
exports.nameRegex = /^[a-zA-Z][a-zA-Z0-9]{0,29}$/;
exports.passRegex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]{0,15}$/;
