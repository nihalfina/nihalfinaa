const mongoose = require('mongoose');
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose)
var mobileBrandSchema = new mongoose.Schema({

    brandId: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    categoryName: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    categoryRefId: {
        type: Schema.Types.ObjectId,
        ref: 'categories_products'
    },
    details: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    status: {
        type: String,
        required: true,
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
    }

},
    { timestamps: true, versionKey: false }
)

mobileBrandSchema.plugin(autoIncrement.plugin, { model: 'mobile_brands_names', field: 'brandId', incrementBy: 1 })
const mobileBrandDb = mongoose.model("mobile_brands_names", mobileBrandSchema);

module.exports = mobileBrandDb