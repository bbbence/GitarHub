const mongoose = require('mongoose');

const ShippingSchema = mongoose.Schema({
    customer: {
        type: String,
        required: true
    },
    guitars: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Shipping', ShippingSchema);
