"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const spanish_1 = __importDefault(require("./spanish"));
const french_1 = __importDefault(require("./french"));
const german_1 = __importDefault(require("./german"));
const italian_1 = __importDefault(require("./italian"));
const portuguese_1 = __importDefault(require("./portuguese"));
const users_1 = __importDefault(require("./users"));
const auth_1 = __importDefault(require("./auth"));
const auth_2 = __importDefault(require("./auth"));
// ALL below routes start with /api
//Spanish Routes
router.use("/spanish", spanish_1.default);
//French Routes
router.use("/french", french_1.default);
// German Routes
router.use("/german", german_1.default);
// Italian routes
router.use("/italian", italian_1.default);
// Portuguese routes
router.use("/portuguese", portuguese_1.default);
// Auth routes
router.use("/auth", auth_1.default);
// User routes 
router.use("/users/languages", auth_2.default, users_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map