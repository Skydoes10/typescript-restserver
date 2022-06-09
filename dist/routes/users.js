"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
const users_1 = require("../controllers/users");
const db_validators_1 = require("../helpers/db-validators");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.userExists),
    validate_fields_1.default
], users_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('name').not().isEmpty(),
    (0, express_validator_1.check)('email').not().isEmpty(),
    (0, express_validator_1.check)('email').isEmail().custom(db_validators_1.emailExists),
    validate_fields_1.default
], users_1.createUser);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.userExists),
    validate_fields_1.default
], users_1.updateUser);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.userExists),
    validate_fields_1.default
], users_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map