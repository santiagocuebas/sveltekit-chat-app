export const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated())
        return next();
    return res.json({ error: 'loggedError' });
};
export const isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated())
        return next();
    return res.json({ error: 'notLoggedError' });
};
