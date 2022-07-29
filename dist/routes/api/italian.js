"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const italianController_1 = __importDefault(require("../../controllers/italianController"));
// Matches with "/api/italian"
router.route("/")
    .get(italianController_1.default.findAll)
    .post(italianController_1.default.addWord);
router.route("/:word")
    .patch(italianController_1.default.answerCorrectly);
router.route("/for-review")
    .get(italianController_1.default.findAllForReview);
router.route("/words/unlearned")
    .get(italianController_1.default.findAllUnlearnedWords);
exports.default = router;
//# sourceMappingURL=italian.js.map