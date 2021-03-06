const Order = require('../../models/order.model');

exports.create = orderData => {
    const order = new Order(orderData);
    return order.save();
};

exports.findAll = () => Order.find().populate('user', 'guitars');

exports.findOne = id => Order.findById(id).populate('user', 'guitars');

exports.update = (id, updateData) => Order.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Order.findByIdAndRemove(id);
