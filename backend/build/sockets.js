import passport from 'passport';
import { sessionMiddleware } from './middlewares/session.js';
import { Chat } from './models/Chat.js';
import { wrap } from './libs/libs.js';
export const sockets = (io) => {
    io.use(wrap(sessionMiddleware));
    io.use(wrap(passport.initialize()));
    io.use(wrap(passport.session()));
    io.use((socket, next) => {
        if (socket.request.user)
            return next();
        else
            return (new Error('Unauthorized'));
    });
    io.on('connection', async (socket) => {
        const chats = await Chat
            .find()
            .sort({ createdAt: -1 });
        io.emit('loadchats', chats);
        socket.on('message', async (message) => {
            const newMessage = await Chat.create({
                body: message,
                from: socket.request.user.username,
                createdAt: new Date
            });
            socket.emit('message', newMessage);
            socket.broadcast.emit('message', newMessage);
        });
        socket.on('delete', async (_id) => {
            await Chat.deleteOne({
                _id,
                from: socket.request.user.username
            });
            socket.broadcast.emit('delete', _id);
        });
    });
};
