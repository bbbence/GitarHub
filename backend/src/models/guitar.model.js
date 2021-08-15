const mongoose = require('mongoose');

const GuitarSchema = mongoose.Schema({
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },  
    price: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Guitar', GuitarSchema);

/*
export class Guitar {
  _id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  active: boolean = true;
}
*/