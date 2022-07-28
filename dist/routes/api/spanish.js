"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const spanishController_1 = __importDefault(require("../../controllers/spanishController"));
// Matches with "/api/spanish"
router.route("/")
    .get(spanishController_1.default.findAll);
router.route("/:word")
    .patch(spanishController_1.default.answerCorrectly);
router.route("/for-review")
    .get(spanishController_1.default.findAllForReview);
router.route("/words/unlearned")
    .get(spanishController_1.default.findAllUnlearnedWords);
exports.default = router;
//# sourceMappingURL=spanish.js.map