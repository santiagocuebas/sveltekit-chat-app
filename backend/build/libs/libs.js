export const wrap = (middleware) => {
    return (socket, next) => {
        return middleware(socket.request, {}, next);
    };
};
