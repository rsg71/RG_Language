"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const frenchController_1 = __importDefault(require("../../controllers/frenchController"));
// Matches with "/api/french"
router.route("/")
    .get(frenchController_1.default.findAll);
router.route("/:word")
    .patch(frenchController_1.default.answerCorrectly);
router.route("/words/unlearned")
    .get(frenchController_1.default.findAllUnlearnedWords);
exports.default = router;
//# sourceMappingURL=french.js.map