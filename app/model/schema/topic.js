const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const topicSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    name: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
        required: true,
        select: false,
    },
}, {
    timestamps: true,
});

Model('Topic', topicSchema, 'topics');
