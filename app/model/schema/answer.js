const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const answerSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    content: {
        type: String,
        required: true,        
    },
    answerer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
    voteCount: {
        type: Number,
        required: false,
        default: 0,
    },
}, {
    timestamps: true,
});

Model('Answer', answerSchema, 'answers');
