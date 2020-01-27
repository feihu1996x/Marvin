const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const cartSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    goods: {
        type: Schema.Types.ObjectId,
        ref: 'Goods',
        required: true,
    },
    filter: {
        type: Schema.Types.ObjectId,
        ref: 'Filter',
        required: true,
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: 'Size',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    checked: {
        type: Number,
        enum: [
            0, // 未选中
            1, // 已选中
        ],
        default: 1,
        required: false,
    },
}, {
    timestamps: true,
});

Model('Cart', cartSchema, 'carts');
