const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const goodsSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    name: {
        type: String,
        required: true,
    },
    wholesalePrice: {
        type: Number,
        required: false,
    },
    retailPrice: {
        type: Number,
        required: false,
    },
    stock: {
        type: String,
        required: false,
    },
    number: {
        type: Number,
        required: false,
    },
    barCode: {
        type: String,
        required: false,
    },
    customerRating: {
        type: Number,
        enum: [
            1, 
            2, 
            3, 
            4, 
            5,
        ],
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    specifications: {
        type: [{
            type: String,
            required: true,
        }],
        required: true,
    },
    introduction: {
        type: [{
            description: {
                type: String,
                required: true,    
            },
            images: {
                type: [{
                    type: String,
                    required: true,
                }],
                required: true,
            }
        }],
        required: false,
    },
    images: {
        type: [{
            type: String,
            required: true, 
        }],
        required: true,
    },
    weChatMaterials: {
        type: [{
            description: {
                type: String,
                required: true,
            },
            images: {
                type: [{
                    type: String,
                    require: true,
                }],
                required: true,
            }            
        }],
        required: true,
    },
    functionalitycategory: {
        type: Schema.Types.ObjectId,
        ref: 'FunctionalityCategory',
        required: true,
    },
    brandCategory: {
        type: Schema.Types.ObjectId,
        ref: 'BrandCategory',
        required: true,
    },
    label: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
}, {
    timestamps: true,
});

Model('Goods', goodsSchema, 'goods');
