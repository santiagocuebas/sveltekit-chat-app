import { Router } from 'express';
import passport from 'passport';
import { IUser } from '../global.js';
import { arrayRegister } from '../libs/arrayValidators.js';
import { isLoggedIn, isNotLoggedIn } from '../middlewares/logged.js';
import { validate } from '../middlewares/validator.js';

const router = Router();

router.post(
	'/register',
	isNotLoggedIn,
	validate(arrayRegister),
	passport.authenticate('register'),
	(req, res) => {
		const user = req.user as IUser;
		return res.json({ url: user.username });
	}
);

router.post(
	'/logout',
	isLoggedIn,
	(req, res, next) => {
		return req.logout(err => {
			if (err) return next(err);
			res.clearCookie('connect.sid');
			return res.json({ url: '/' });
		});
	}
);

export default router;
