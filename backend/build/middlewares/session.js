import session from 'express-session';
import MongoStore from 'connect-mongo';
import { MONGO_URI } from '../config.js';
export const sessionMiddleware = session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongoUrl: MONGO_URI,
        ttl: 60 * 60 * 24 * 14,
        touchAfter: 24 * 60 * 60
    }),
    cookie: {
        httpOnly: true,
        sameSite: 'lax',
        secure: false
    }
});
