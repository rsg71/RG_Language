"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const config_1 = __importDefault(require("./config"));
console.log("log level for pino is: ", config_1.default.LOG_LEVEL);
const logger = (0, pino_1.default)({
    level: config_1.default.LOG_LEVEL || "info"
});
exports.default = logger;
//# sourceMappingURL=logger.js.map