import bcrypt from 'bcrypt';
export const encryptPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);
    return hash;
};
export const matchPassword = async (pass, savedPass) => {
    return bcrypt.compare(pass, savedPass);
};
