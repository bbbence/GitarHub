const fsp = require('fs').promises;
const User = require('../models/user.model');
const Guitar = require('../models/guitar.model');
const Order = require('../models/order.model');
const Shipping = require('../models/shipping.model');
const Bill = require('../models/bill.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`, 
            'utf8'
        );
        const list = JSON.parse(source);
        for (let i = 0; i < list.length; i++) {
            let record = new model(list[i]);
            await record.save();
        };
    }
};

const dropCollection = async(model, collection) => {
    try {
        await model.db.dropCollection(collection);
    } catch(e) {
        console.log('COLLECTION NOT FOUND: ' + collection);
    }
};

( async () => {
    dropCollection(User, 'users');
    dropCollection(Guitar, 'guitars');
    dropCollection(Order, 'orders');
    dropCollection(Shipping, 'shippings');
    dropCollection(Bill, 'bills');

    seedCollection(User, 'users');
    seedCollection(Guitar, 'guitars');
    seedCollection(Order, 'orders');
    seedCollection(Shipping, 'shippings');
    seedCollection(Bill, 'bills');
})();