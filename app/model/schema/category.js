const mongoosse = require('mongoose');

const Schema = mongoosse.Schema;
const Model = mongoosse.model;

const functionalityCategorySchema = new Schema({  // 功能分类
    __v: {
        type: Number,
        select: false,
    },
    categoryName: {  // 类别名称
        type: String,
        required: true,
    },
    categoryDescription: {  // 类别描述
        type: String,
        required: true,
    },
    rootCategoryId: {  // 上级类别ID
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

const brandCategorySchema = new Schema({  // 品牌分类
    __v: {
        type: Number,
        select: true
    },
    categoryName: {  // 类别名称
        type: String,
        required: true,
    },
    categoryDescription: {  // 类别描述
        type: String,
        required: true,
    },
    rootCategoryId: {  // 上级类别ID
        type: String,
        required: false,
    },
});

Model('FunctionalityCategory', functionalityCategorySchema, 'functionalityCategory');
Model('BrandCategory', brandCategorySchema, 'brandCategory');
