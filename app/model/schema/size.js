const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const sizeSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    filter: {
        type: Schema.Types.ObjectId,
        ref: 'Filter',
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    wholesalePrice: {
        type: Number,
        required: true,
    },
    retailPrice: {
        type: Number,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    barCode: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

Model('Size', sizeSchema, 'sizes');
