const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var g = /*geometry*/ {
    "type": "Point",
    "coordinates": [125.6, 10.1]
}

//create GEO location schema
const gGeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});

//create ninja schema & model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The field <name> is required!']
    },
    rank : {
        type: String,
    },
    available : {
        type: Boolean,
        default: false
    },
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;