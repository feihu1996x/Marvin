const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const filterSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    goods: {
        type: Schema.Types.ObjectId,
        ref: 'Goods',
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    size: {
        type: Schema.Types.ObjectId,
        ref: 'Size',
        required: true,
    },
}, {
    timestamps: true,
});

Model('Filter', filterSchema, 'filters');
