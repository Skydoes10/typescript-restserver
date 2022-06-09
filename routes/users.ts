import { Router } from "express";
import { check } from "express-validator";
import validateFields from "../middlewares/validate-fields";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users";
import { emailExists, userExists } from "../helpers/db-validators";

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    check('id').custom(userExists),
    validateFields
], getUser);

router.post('/', [
    check('name').not().isEmpty(),
    check('email').not().isEmpty(),
    check('email').isEmail().custom(emailExists),
    validateFields
], createUser);

router.put('/:id', [
    check('id').custom(userExists),
    validateFields
], updateUser);

router.delete('/:id', [
    check('id').custom(userExists),
    validateFields
], deleteUser);

export default router;