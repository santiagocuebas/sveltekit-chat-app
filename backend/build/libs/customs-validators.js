import { User } from '../models/User.js';
import { matchPassword } from './bcrypt.js';
export const isValidPassword = async (value, { req }) => {
    const user = await User.findOne({ username: req.body.username });
    if (user !== null) {
        const match = await matchPassword(value, user.password);
        if (!match)
            throw new Error('Incorrect password');
    }
    return true;
};
