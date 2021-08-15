const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
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
    shipped: {
        type: Boolean,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Bill', BillSchema);
