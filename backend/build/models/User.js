import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, allowNull: false, unique: true },
    password: String
}, {
    timestamps: true
});
export const User = model('User', userSchema);
