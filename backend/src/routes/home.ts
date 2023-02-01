import { Router } from 'express';
import { isLoggedIn } from '../middlewares/logged.js';

const router = Router();

router.get(
	'/main',
	isLoggedIn,
	(req, res) => {
		return res.json({ username: req.user.username });
	}
);

export default router;

