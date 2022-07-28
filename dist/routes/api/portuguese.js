"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const portugueseController_1 = __importDefault(require("../../controllers/portugueseController"));
// Matches with "/api/portuguese"
router.route("/")
    .get(portugueseController_1.default.findAll);
router.route("/:word")
    .patch(portugueseController_1.default.answerCorrectly);
router.route("/words/unlearned")
    .get(portugueseController_1.default.findAllUnlearnedWords);
exports.default = router;
//# sourceMappingURL=portuguese.js.map