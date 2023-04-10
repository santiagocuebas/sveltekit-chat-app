import { body } from 'express-validator';
import { isValidPassword } from './customsValidators.js';
export const arrayRegister = [
    body('username', 'Invalid username')
        .exists({ checkFalsy: true }).bail()
        .isString().bail()
        .isLength({ min: 5, max: 40 }).withMessage('The username is too short or too long'),
    body('password')
        .exists({ checkFalsy: true })
        .isString().bail()
        .isLength({ min: 5, max: 60 }).withMessage('The password is too short or too long').bail()
        .matches(/[0-9]/).withMessage('Password must constain a number').bail()
        .custom(isValidPassword)
];
