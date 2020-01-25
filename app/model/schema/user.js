const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

const userSchema = new Schema({
    __v: {
        type: Number,
        select: false,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    avatarUrl: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: [
            'male',
            'female',
        ],
        default: 'female',
        required: true,
    },
    headline: {
        type: String,
        required: false,
    },
    locations: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Topic',
        }],
        select: false,
        required: false,
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
        select: false,
        required: false,
    },
    employments: {
        type: [{
            company: {
                type: Schema.Types.ObjectId,
                ref: 'Topic',
                required: true,
            },
            job: {
                type: Schema.Types.ObjectId,
                ref: 'Topic',
                required: true,
            }
        }],
        select: false,
        required: false,
    },
    educations: {
        type: [{
            school: {
                type: Schema.Types.ObjectId,
                ref: 'Topic',
                required: true,
            },
            major: {
                type: Schema.Types.ObjectId,
                ref: 'Topic',
                required: true,
            },
            diploma: {
                type: Number,
                enum: [
                    1, // 高中及以下
                    2, // 大专
                    3, // 本科
                    4, // 硕士
                    5, // 博士及以上
                ],
                required: true,
            },
            entranceYear: {
                type: Number,
                required: true,
            },
            graducationYear: {
                type: Number,
                required: true,
            },
        }],
        select: false,
        required: false,
    },
    followingUsers: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }],
        select: false,
        required: false,
    },
    followingTopics: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Topic',
            required: true,
        }],
        select: false,
        required: false,
    },
    likingAnswers: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Answer',
            required: true,
        }],
        select: false,
        required: false,
    },
    dislikingAnswers: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Answer',
            required: true,
        }],
        select: false,
        required: false,
    },
    collectingAnswers: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Answer',
            required: true,
        }],
        select: false,
        required: false,
    },
    addressList: {
        type: [{
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
        }],
        select: false,
        required: false,
    }
}, {
    timestamps: true,
});

Model('User', userSchema, 'users');
