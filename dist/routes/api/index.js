"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const users_1 = __importDefault(require("./users"));
const auth_1 = __importDefault(require("./auth"));
const auth_2 = __importDefault(require("./auth"));
// ALL below routes start with /api
// Auth routes
router.use("/auth", auth_1.default);
// User routes 
router.use("/users/languages", auth_2.default, users_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map