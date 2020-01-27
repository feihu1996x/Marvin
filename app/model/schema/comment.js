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
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        select: false,
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: false,
    },
    answerId: {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        required: false,
    },
    goodsId: {
        type: Schema.Types.ObjectId,
        ref: 'Goods',
        required: false,
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'OrderId',
        required: false,
    },
    rootCommentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false,
    },
    replyId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
}, {
    timestamps: true,
});

Model('Comment', commentSchema, 'comments');
