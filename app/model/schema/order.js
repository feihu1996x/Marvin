const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const orderSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    orderSn: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    yunPrice: {
        type: Number,
        required: true,
    },
    payPrice: {
        type: Number,
        required: true,
    },
    paySn: {
        type: String,
        required: false,
    },
    prePayId: {
        type: String,
        required: false,
    },
    note: {
        type: String,
        required: false,
        select: false,
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true,
    },
    status: {
        type: Number,
        enum: [
            1, // 待付款
            2, // 待发货
            3, // 待收货
            4, // 待评价
            5, // 已取消
        ],
    },
    goodsList: {
        type: [{
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
        }],
    },
    expressNumber: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

Model('Order', orderSchema, 'orders');
