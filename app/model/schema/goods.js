const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const goodsSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    productName: {
        type: String,
        required: true,
    },
    productFilter: {
        type: [{
            color: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            size: {
                type: [{
                    productSize: {
                        type: String,
                        required: true,
                    },
                    productWholesalePrice: {
                        type: Number,
                        required: true,
                    },
                    productRetailPrice: {
                        type: Number,
                        required: true,
                    },
                    productStock: {
                        type: String,
                        required: true,
                    },
                    productNumber: {
                        type: Number,
                        required: true,
                    },
                    productBarCode: {
                        type: String,
                        required: true,
                    },
                }],
                required: true,
            }
        }],
        required: true,
    },
    productWholesalePrice: {
        type: Number,
        required: false,
    },
    productRetailPrice: {
        type: Number,
        required: false,
    },
    productStock: {
        type: String,
        required: false,
    },
    productNumber: {
        type: Number,
        required: false,
    },
    productBarCode: {
        type: String,
        required: false,
    },
    productCustomerRating: {
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
    productOrigin: {
        type: String,
        required: true,
    },
    productSpecifications: {
        type: [{
            type: String,
            required: true,
        }],
        required: true,
    },
    productIntroduction: {
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
    productImages: {
        type: [{
            type: String,
            required: true, 
        }],
        required: true,
    },
    productWeChatMaterials: {
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
