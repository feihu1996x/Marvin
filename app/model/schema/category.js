const mongoosse = require('mongoose');

const Schema = mongoosse.Schema;
const Model = mongoosse.model;

const functionalityCategorySchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    root: {
        type: Schema.Types.ObjectId,
        ref: 'FunctionalityCategory',
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
    name: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    root: {
        type: Schema.Types.ObjectId,
        ref: 'BrandCategory',
        required: false,
    },
}, {
    timestamps: true,
});

Model('FunctionalityCategory', functionalityCategorySchema, 'functionalityCategories');
Model('BrandCategory', brandCategorySchema, 'brandCategories');
