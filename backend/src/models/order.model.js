const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    guitars: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Guitar',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: new Date(),
    },
    bill: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bill',
    },
    shipped: {
        type: Boolean,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);