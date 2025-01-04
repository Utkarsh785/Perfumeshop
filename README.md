# Perfume Shop Project

An e-commerce platform dedicated to luxury perfumes, offering a curated collection of fragrances across different categories.

## About The Project

This online perfume store allows customers to explore and purchase their favorite fragrances with ease. The platform provides detailed information about each perfume, including its fragrance family, available sizes, and current stock status.

## Key Features

- 🔍 Advanced perfume search and filtering
- 🗂️ Browse perfumes by fragrance families
- 📱 Responsive design for all devices
- 🛒 Shopping cart functionality
- 💳 Secure checkout process
- 📦 Stock tracking system

## Fragrance Categories

Our perfumes are organized into these main fragrance families:
- 🌸 Floral - Light and fresh floral scents
- 🕌 Oriental - Rich, warm, and exotic fragrances
- 🌊 Fresh - Clean and energizing scents
- 🌳 Woody - Deep and natural wood-based fragrances
- 🍊 Citrus - Bright and zesty citrus notes

## Available Sizes
Each perfume is available in multiple sizes:
- 30ml - Travel size
- 50ml - Standard size
- 100ml - Value size

## Technical Details

### Built With
- Frontend: React.js
- Backend: Node.js & Express
- Database: MongoDB with Mongoose
- Authentication: JWT

### Database Structure
Each product in our database includes:
- Product name
- Detailed description
- Pricing information
- Multiple product images
- Category classification
- Available sizes
- Stock status
- Creation timestamp

## Project Structure

```
perfume-shop/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context providers
│   │   ├── assets/       # Images, fonts, etc.
│   │   ├── styles/       # CSS/SCSS files
│   │   └── utils/        # Helper functions
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Mongoose models
│   │   └── Product.js   # Product schema
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
│
├── .env                  # Environment variables
├── .gitignore
└── README.md
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/products/category/:category` - Get products by category

### Cart & Orders
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation Steps

1. Clone the repository
```
git clone https://github.com/yourusername/perfume-shop.git
```

2. Install NPM packages
```bash
npm install
```

3. Create a .env file in the root directory and add:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the development server
```bash
npm run dev
```

## Usage Guide

1. **Browse Products**
   - Use category filters to find perfumes
   - Click on products for detailed information

2. **Shopping**
   - Select preferred size
   - Add to cart
   - Proceed to checkout

3. **Admin Panel**
   - Manage inventory
   - Add/Edit products
   - View orders

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
Made with ❤️ for Perfume Enthusiasts | © 2024 Perfume Shop