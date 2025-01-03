# 🛍️ Luxury Perfume Shop E-commerce Website

## Project Overview
A modern, full-stack e-commerce website for a luxury perfume shop. This project showcases a beautiful and responsive user interface where customers can browse various perfume collections, view new arrivals, and explore special offers. Built with React and Node.js, it features a dark/light mode toggle and smooth animations for an enhanced shopping experience.

## 📸 Project Screenshots

### Home Page
![Home Page](src/assets/screenshots/homepage.png)
*Homepage with featured products and special offers*

### Collections Page (Light Mode)
![Collections](src/assets/screenshots/collections-light.png)
*4x4 grid layout of perfume collections with hover effects*

### Collections Page (Dark Mode)
![Collections Dark](src/assets/screenshots/collections-dark.png)
*Dark mode view of collections for comfortable viewing*

### New Arrivals
![New Arrivals](src/assets/screenshots/new-arrivals.png)
*Latest products with ratings and special tags*

### Sale Section
![Sale Section](src/assets/screenshots/sale.png)
*Discounted items with original and sale prices*

### Product Details
![Product Details](src/assets/screenshots/product-details.png)
*Detailed product view with images, description, and reviews*

## ✨ Key Features

### 🎨 User Interface
- Modern, responsive design that works on all devices
- Dark/Light mode for comfortable viewing
- Smooth animations and transitions
- Interactive product cards with hover effects

### 📱 Pages & Navigation
- **Home Page**: Featured products, banner, and latest collections
- **Collections Page**: 16 unique collections in a 4x4 grid layout
- **New Arrivals**: Latest products with ratings and special tags
- **Sale Section**: Discounted items with original and sale prices
- **Product Details**: Comprehensive product information and reviews

### 🛒 Shopping Features
- Product filtering and search
- Customer ratings and reviews
- Special offers and discounts
- Size selection options
- Share products on social media

## 🚀 Getting Started

### Prerequisites
Before installation, ensure you have:
1. Node.js (v14 or higher) - [Download](https://nodejs.org/)
2. MongoDB - [Download](https://www.mongodb.com/try/download/community)
3. Git - [Download](https://git-scm.com/downloads)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd perfume-shop
   ```

2. **Frontend Setup**
   ```bash
   # Navigate to frontend directory
   cd client

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```
   Frontend will run on: http://localhost:5173

3. **Backend Setup**
   ```bash
   # Open new terminal and navigate to backend directory
   cd server

   # Install dependencies
   npm install

   # Create .env file and add:
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/perfume_shop
   NODE_ENV=development

   # Start backend server
   npm run dev
   ```
   Backend will run on: http://localhost:5000

## 💻 Tech Stack

### Frontend
- **React (Vite)**: For building the user interface
- **Material-UI**: Component library for modern design
- **React Router**: For page navigation
- **Axios**: For API requests

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: MongoDB object modeling

## 📁 Project Structure
```
perfume-shop/
├── client/                 # Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Images & static files
│   │   └── styles/       # CSS files
│   └── package.json
│
└── server/                # Backend
    ├── models/           # Database models
    ├── routes/           # API routes
    ├── server.js        # Server configuration
    └── package.json
```

## 🔧 Common Issues & Solutions

### MongoDB Connection Error
```bash
# Error: MongoDB connection failed
Solution: 
1. Ensure MongoDB is running
2. Check MongoDB connection string
3. Verify MongoDB port (default: 27017)
```

### Port Already in Use
```bash
# Error: Port already in use
Solution:
1. Change port in .env file
2. Kill process using the port
   - Windows: netstat -ano | findstr :5000
   - Mac/Linux: lsof -i :5000
```

## 🤝 Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Made with ❤️ for Perfume Enthusiasts #   P e r f u m e _ s h o p  
 