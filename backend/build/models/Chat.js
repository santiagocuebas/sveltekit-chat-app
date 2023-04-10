import { Schema, model } from 'mongoose';
const chatSchema = new Schema({
    from: String,
    body: String,
    createdAt: { type: Date, default: new Date }
});
export const Chat = model('Chat', chatSchema);
