import { ValidationError } from 'express-validator';
import { Error } from '../global.js';

export const getErrorMessages = (errs: ValidationError[]): Error => {
	const message: Error = {};

	for (const e of errs) {
		message[e.param] = e.msg;
	}
	return message;
};