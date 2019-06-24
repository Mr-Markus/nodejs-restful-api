const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, requiered: true },
    price: { type: Number, required: true },
    productImage: { type: String, requiered: false }
});

module.exports = mongoose.model('Product', productSchema);