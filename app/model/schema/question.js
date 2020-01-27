const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const questionSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    title: {
        type: String,
        required: true,
    },
    desciption: {
        type: String,
        required: true,
    },
    questioner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        select: false,
    },
    topics: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Topic',
            required: true,
        }],
        select: false,
    },
}, {
    timestamps: true,
});

Model('Question', questionSchema, 'questions');
