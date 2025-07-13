# Nest-Ecommerce 🛒

A modern, responsive e-commerce web application built with React, Redux Toolkit, and Tailwind CSS. This project provides a complete online shopping experience with features like product browsing, cart management, wishlist, and user authentication.

## ✨ Features

- **🛍️ Product Management**: Browse products by categories with search functionality
- **🛒 Shopping Cart**: Add/remove items with real-time cart updates
- **❤️ Wishlist**: Save favorite products for later
- **📊 Product Comparison**: Compare multiple products side by side
- **🔥 Deals & Offers**: Special deals and promotional content
- **👤 User Account**: User registration, login, and account management
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🎨 Modern UI**: Clean and intuitive interface with Material-UI icons
- **⚡ Fast Performance**: Built with Vite for optimal development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **State Management**: Redux Toolkit & React Redux
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS 4.1.11
- **UI Components**: Material-UI (MUI)
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Nest-Ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Main navigation header
│   ├── Benefits.jsx    # Benefits section
│   ├── Category.jsx    # Category display
│   ├── DealOfDay.jsx   # Daily deals
│   ├── Filter.jsx      # Product filtering
│   ├── Footer.jsx      # Site footer
│   ├── Login.jsx       # Login form
│   ├── Register.jsx    # Registration form
│   ├── Product.jsx     # Product cards
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Cart.jsx        # Shopping cart
│   ├── Deals.jsx       # Deals page
│   ├── Compare.jsx     # Product comparison
│   ├── WishList.jsx    # Wishlist page
│   ├── MyAccount.jsx   # User account
│   └── ...
├── features/           # Redux slices
│   ├── cart/           # Cart state management
│   └── categories/     # Categories state management
├── store.js           # Redux store configuration
├── main.jsx           # Application entry point
└── App.jsx            # Main app component
```

## 🎯 Key Features Explained

### Shopping Cart
- Add products to cart with quantity management
- Real-time cart updates using Redux
- Persistent cart state

### Product Categories
- Dynamic category loading from API
- Category-based product filtering
- Visual category icons

### User Authentication
- User registration and login
- Password reset functionality
- Account management

### Product Comparison
- Compare multiple products
- Side-by-side feature comparison
- Easy product selection

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_BASE_URL=your_api_base_url
VITE_APP_NAME=Nest-Ecommerce
```

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration. Styles are imported from `src/style/input.css`.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Styling
- Modify `src/style/input.css` for global styles
- Use Tailwind utility classes for component styling
- Customize theme colors in Tailwind config

### Components
- All components are modular and reusable
- Follow the existing component structure for consistency
- Use Material-UI icons for visual elements

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v0.0.0** - Initial release with basic e-commerce functionality
- Features: Product browsing, cart management, user authentication

---

**Happy Shopping! 🛒✨**
