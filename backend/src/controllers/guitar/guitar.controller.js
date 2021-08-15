const express = require('express');
const createError = require('http-errors');

const guitarService = require('./guitar.service');

// Create a new guitar.
exports.create = (req, res, next) => {
    const { brand, model, color, description, price, active } = req.body;
    if (!brand || !model || !color || !price) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newGuitar = {
        model: model,
        brand: brand,
        color: color,
        description: description,
        price: price,
        active: active,
    };

    return guitarService.create(newGuitar)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return guitarService.findAll()
        .then( guitars => {
            res.json(guitars);
        });
};

exports.findOne = (req, res, next) => {
    return guitarService.findOne(req.params.id)
        .then( guitar => {
            if (!guitar) {
                return next(new createError.NotFound("Guitar is not found"));
            }
            return res.json(guitar);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { model, brand, color, description, price, active } = req.body;
    if (!brand || !model || !color || !price) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        model: model,
        brand: brand,
        color: color,
        description: description,
        price: price,
        active: active,
    };
    return guitarService.update(req.params.id, update)
        .then(guitar => {
            res.json(guitar);
        })
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return guitarService.delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => {
            next(new createError.InternalServerError(err.message));
        } );
};
