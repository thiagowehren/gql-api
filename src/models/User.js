import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean,
        required: true,
    },
});

export default mongoose.model('User', Schema);