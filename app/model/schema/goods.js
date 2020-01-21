const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goodsSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    productName: {
        type: String,
        required: true,
    },  // 商品标题
    productNumber: {
        type: Number,
    }, // 商品货号
    productBarCode: {
        type: String,
    }, // 商品条码
    productWholesalePrice: {
        type: Number,
    }, // 商品批发价
    productRetailPrice: {
        type: Number,
    }, // 商品零售价
    productCustomerRatings: {
        type: Number,
        enum: [
            1, 
            2, 
            3, 
            4, 
            5
        ],
    }, // 商品评分
    productOrigin: {
        type: String,
    }, // 商品发货地
    productStock: {
        type: String,
    }, // 商品库存
    productSpecification: [{
        type: String,
    }], // 商品规格参数
    productIntroduction: [{
        description: {
            type: String,
        },
        images: [{
            type: String,
        }]
    }], // 商品介绍
    productImages: [{
        type: String,
    }], // 商品实拍
    productWeChatMaterials: [{
        description: {
            type: String,
        },
        images: [{
            type: String,
        }]
    }], // 商品微信素材
});

mongoose.model('Goods', goodsSchema, 'goods');