"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
console.log("log level for pino is: ", process.env.LOG_LEVEL);
const logger = (0, pino_1.default)({
    level: process.env.LOG_LEVEL || "info"
});
exports.default = logger;
//# sourceMappingURL=logger.js.map