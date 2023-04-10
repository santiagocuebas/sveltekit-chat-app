export const getErrorMessages = (errs) => {
    const message = {};
    for (const e of errs) {
        message[e.param] = e.msg;
    }
    return message;
};
