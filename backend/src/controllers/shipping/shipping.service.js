const Shipping = require('../../models/shipping.model');

exports.create = shippingData => {
    const shipping = new Shipping(shippingData);
    return shipping.save();
};

exports.findAll = () => Shipping.find().populate();

exports.findOne = id => Shipping.findById(id).populate();

exports.update = (id, updateData) => Shipping.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Shipping.findByIdAndRemove(id);
