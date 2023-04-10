import session from 'express-session';
import MongoStore from 'connect-mongo';
import { MONGO_URI, SECRET } from '../config.js';
export const sessionMiddleware = session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: MONGO_URI,
        ttl: 60 * 60 * 24 * 14
    }),
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
    }
});
