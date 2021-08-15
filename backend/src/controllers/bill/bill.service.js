const Bill = require('../../models/bill.model');

exports.create = billData => {
    const bill = new Bill(billData);
    return bill.save();
};

exports.findAll = () => Bill.find().populate('posts');

exports.findOne = id => Bill.findById(id).populate('posts');

exports.update = (id, updateData) => Bill.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Bill.findByIdAndRemove(id);
