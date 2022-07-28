"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const germanController_1 = __importDefault(require("../../controllers/germanController"));
// Matches with "/api/german"
router.route("/")
    .get(germanController_1.default.findAll);
router.route("/:word")
    .patch(germanController_1.default.answerCorrectly);
router.route("/words/unlearned")
    .get(germanController_1.default.findAllUnlearnedWords);
exports.default = router;
//# sourceMappingURL=german.js.map