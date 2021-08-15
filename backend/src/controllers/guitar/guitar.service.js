const Guitar = require('../../models/guitar.model');

exports.create = guitarData => {
    const guitar = new Guitar(guitarData);
    return guitar.save();
};

exports.findAll = () => Guitar.find().populate('posts');

exports.findOne = id => Guitar.findById(id).populate('posts');

exports.update = (id, updateData) => Guitar.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Guitar.findByIdAndRemove(id);
