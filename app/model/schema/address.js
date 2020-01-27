const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const addressSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    province: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    county: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    detailedAddress: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    isDefault: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

Model('Address', addressSchema, 'addresses');
