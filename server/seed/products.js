const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Floral Essence',
    description: 'A delicate blend of jasmine and rose petals',
    price: 89.99,
    image: 'http://localhost:5000/images/image14.jpg',
    category: 'Floral',
    sizes: ['30ml', '50ml', '100ml'],
    inStock: true
  },
  {
    name: 'Ocean Breeze',
    description: 'Fresh and invigorating marine scent',
    price: 79.99,
    image: 'http://localhost:5000/images/image15.jpg',
    category: 'Fresh',
    sizes: ['50ml', '100ml'],
    inStock: true
  },
  {
    name: 'Midnight Mystery',
    description: 'Deep and sensual oriental fragrance',
    price: 99.99,
    image: 'http://localhost:5000/images/image16.jpg',
    category: 'Oriental',
    sizes: ['30ml', '50ml', '100ml'],
    inStock: true
  },
  {
    name: 'Citrus Dream',
    description: 'Energizing blend of citrus notes',
    price: 69.99,
    image: 'http://localhost:5000/images/image17.jpg',
    category: 'Citrus',
    sizes: ['30ml', '50ml'],
    inStock: true
  },
  {
    name: 'Woody Elegance',
    description: 'Sophisticated blend of cedar and sandalwood',
    price: 109.99,
    image: 'http://localhost:5000/images/image18.jpg',
    category: 'Woody',
    sizes: ['50ml', '100ml'],
    inStock: true
  },
  {
    name: 'Spring Blossom',
    description: 'Light and airy floral fragrance',
    price: 84.99,
    image: 'http://localhost:5000/images/image19.jpg',
    category: 'Floral',
    sizes: ['30ml', '50ml', '100ml'],
    inStock: true
  },
  {
    name: 'Oriental Nights',
    description: 'Exotic blend of spices and amber',
    price: 119.99,
    image: 'http://localhost:5000/images/image20.jpg',
    category: 'Oriental',
    sizes: ['50ml', '100ml'],
    inStock: true
  },
  {
    name: 'Fresh Rain',
    description: 'Clean and refreshing aquatic scent',
    price: 74.99,
    image: 'http://localhost:5000/images/image21.jpg',
    category: 'Fresh',
    sizes: ['30ml', '50ml', '100ml'],
    inStock: true
  }
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://utkarshjnv002:IWRMcVnsKNLlweuk@cluster0.60hot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to MongoDB');

    // Delete existing products
    await Product.deleteMany({});
    console.log('Deleted existing products');

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log('Added product data:', createdProducts);

    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedProducts(); 