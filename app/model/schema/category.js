const mongoosse = require('mongoose');

const Schema = mongoosse.Schema;
const Model = mongoosse.model;

const functionalityCategorySchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    categoryName: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    categoryDescription: {
        type: String,
        required: true,
    },
    rootCategoryId: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

const brandCategorySchema = new Schema({
    __v: {
        type: Number,
        select: true
    },
    categoryName: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    categoryDescription: {
        type: String,
        required: true,
    },
    rootCategoryId: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

Model('FunctionalityCategory', functionalityCategorySchema, 'functionalityCategories');
Model('BrandCategory', brandCategorySchema, 'brandCategories');
