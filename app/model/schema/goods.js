const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const goodsSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    productName: {  // 商品标题
        type: String,
        required: true,
    },
    productFilter: {  // 商品颜色尺码
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
    productWholesalePrice: {  // 商品批发价
        type: Number,
        required: false,
    },
    productRetailPrice: {  // 商品零售价
        type: Number,
        required: false,
    },
    productStock: {  // 商品库存
        type: String,
        required: false,
    },
    productNumber: {  // 商品货号
        type: Number,
        required: false,
    },
    productBarCode: {  // 商品条码
        type: String,
        required: false,
    },
    productCustomerRating: {  // 商品评分
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
    productOrigin: {  // 商品发货地
        type: String,
        required: true,
    },
    productSpecifications: {  // 商品规格参数
        type: [{
            type: String,
            required: true,
        }],
        required: true,
    },
    productIntroduction: {  // 商品介绍
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
    productImages: {  // 商品实拍
        type: [{
            type: String,
            required: true, 
        }],
        required: true,
    },
    productWeChatMaterials: {  // 商品微信素材
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
    functionalitycategory: {  // 功能分类
        type: Schema.Types.ObjectId,
        ref: 'FunctionalityCategory',
        required: true,
    },
    BrandCategory: {  // 品牌分类
        type: Schema.Types.ObjectId,
        ref: 'BrandCategory',
        required: true,
    }
}, {
    timestamps: true,
});

Model('Goods', goodsSchema, 'goods');
