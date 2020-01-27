const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const commentSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        enum: [
            1,
            2,
            3,
            4,
            5,
        ],
        required: false,
    },
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        select: false,
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: false,
    },
    answer: {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        required: false,
    },
    goods: {
        type: Schema.Types.ObjectId,
        ref: 'Goods',
        required: false,
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'OrderId',
        required: false,
    },
    root: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false,
    },
    replyUser: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
}, {
    timestamps: true,
});

Model('Comment', commentSchema, 'comments');
