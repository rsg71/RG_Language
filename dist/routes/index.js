"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const router = require("express").Router();
const api_1 = __importDefault(require("./api"));
// API routes
router.use("/api", api_1.default);
// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile((0, path_1.join)(__dirname, "../client/build/index.html"));
});
exports.default = router;
//# sourceMappingURL=index.js.map