const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true,
    enum: ['Floral', 'Oriental', 'Fresh', 'Woody', 'Citrus']
  },
  sizes: [{
    type: String,
    enum: ['30ml', '50ml', '100ml']
  }],
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; 
