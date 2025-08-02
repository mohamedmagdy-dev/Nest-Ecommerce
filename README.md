# Nest E-commerce 🛒

A modern, responsive e-commerce web application built with React, Redux Toolkit, and Tailwind CSS. This project is a frontend-only implementation inspired by the [Nest E-commerce template](https://nest-frontend-v6.vercel.app/index-2#), designed for learning purposes and showcasing modern web development practices.

## ✨ Features

### 🛍️ **Product Management**
- **Product Browsing**: Browse products by categories with advanced filtering
- **Product Search**: Real-time search functionality with category-based filtering
- **Product Details**: Comprehensive product information with image galleries
- **Product Comparison**: Side-by-side product comparison with feature analysis
- **Product Filtering**: Advanced filtering by category, price, rating, and availability

### 🛒 **Shopping Cart**
- **Add/Remove Items**: Seamless cart management with quantity controls
- **Real-time Updates**: Live cart updates using Redux state management
- **Coupon System**: Apply discount coupons with percentage-based calculations
- **Persistent Cart**: Cart state persistence across sessions
- **Cart Summary**: Detailed cart summary with subtotal, tax, and shipping

### ❤️ **Wishlist Management**
- **Save Favorites**: Add products to wishlist for later purchase
- **Wishlist Organization**: Organize saved items by categories
- **Quick Actions**: Move items from wishlist to cart with one click
- **Wishlist Sharing**: Share wishlist with friends and family

### 🔥 **Deals & Promotions**
- **Daily Deals**: Special offers and time-limited promotions
- **Featured Products**: Highlighted products with special pricing
- **Sale Items**: Discounted products with percentage savings
- **Flash Sales**: Time-sensitive deals with countdown timers

### 👤 **User Authentication**
- **User Registration**: Complete registration with email verification
- **User Login**: Secure login with remember me functionality
- **Password Reset**: Forgot password with email recovery
- **Account Management**: Profile management and order history
- **Protected Routes**: Secure access to user-specific features

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive design for tablet screens
- **Desktop Experience**: Enhanced experience for desktop users
- **Touch-Friendly**: Optimized touch interactions

### 🎨 **Modern UI/UX**
- **Material Design**: Clean and intuitive interface using Material-UI
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Loading States**: Skeleton loaders and progress indicators
- **Toast Notifications**: Real-time feedback with react-hot-toast
- **Image Zoom**: Product image zoom functionality

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.0**: Latest React with concurrent features
- **React Router DOM 7.6.3**: Client-side routing
- **Vite 7.0.0**: Fast build tool and development server

### **State Management**
- **Redux Toolkit 2.8.2**: Modern Redux with simplified syntax
- **React Redux 9.2.0**: React bindings for Redux
- **Redux 5.0.1**: Predictable state container

### **Styling & UI**
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **Material-UI 7.2.0**: React component library
- **Framer Motion 12.23.6**: Animation library
- **Swiper 11.2.10**: Touch slider library

### **Development Tools**
- **ESLint 9.29.0**: Code linting and quality
- **SWC**: Fast JavaScript/TypeScript compiler
- **Axios 1.10.0**: HTTP client for API calls

### **Additional Libraries**
- **React Hot Toast 2.5.2**: Toast notifications
- **React Image Gallery 1.4.0**: Image gallery component
- **React Medium Image Zoom 5.3.0**: Image zoom functionality

## 📦 Installation

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Setup Instructions**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Nest-Ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production with optimization |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Header.jsx          # Main navigation with search and cart
│   ├── Footer.jsx          # Site footer with links and info
│   ├── Benefits.jsx        # Benefits section with features
│   ├── Category.jsx        # Category display and filtering
│   ├── Product.jsx         # Product cards and details
│   ├── Login.jsx           # Authentication forms
│   ├── SignUp.jsx          # User registration
│   ├── MobileMenu.jsx      # Mobile navigation menu
│   ├── NewsLetter.jsx      # Newsletter subscription
│   ├── Offers.jsx          # Promotional offers
│   ├── Sliders.jsx         # Image sliders and carousels
│   ├── Social.jsx          # Social media integration
│   ├── Table.jsx           # Data tables
│   ├── TopSection.jsx      # Hero section components
│   ├── Pagination.jsx      # Pagination controls
│   ├── ProtectedRoutes.jsx # Route protection
│   └── Base_Ui.jsx         # Base UI components
├── pages/                  # Page components
│   ├── Home.jsx            # Homepage with featured products
│   ├── Products.jsx        # Product listing with filters
│   ├── ProductDetails.jsx  # Individual product page
│   ├── Cart.jsx            # Shopping cart page
│   ├── WishList.jsx        # Wishlist management
│   ├── Compare.jsx         # Product comparison
│   ├── Deals.jsx           # Deals and promotions
│   ├── MyAccount.jsx       # User account dashboard
│   ├── SearchProducts.jsx  # Search results page
│   ├── Contact.jsx         # Contact information
│   ├── AboutUs.jsx         # About page
│   ├── PrivacyPolicy.jsx   # Privacy policy
│   ├── Terms.jsx           # Terms of service
│   ├── PurchaseGuide.jsx   # Shopping guide
│   └── Page404.jsx         # 404 error page
├── features/               # Redux slices (state management)
│   ├── auth/               # Authentication state
│   │   └── authSlicer.js   # User auth management
│   ├── cart/               # Shopping cart state
│   │   └── cartSlice.js    # Cart operations
│   ├── categories/         # Categories state
│   │   └── categoriesSlice.js # Category management
│   ├── product/            # Products state
│   │   └── productSlice.js # Product operations
│   ├── wishlist/           # Wishlist state
│   │   └── wishlistSlicer.js # Wishlist management
│   └── compare/            # Compare state
│       └── compareSlice.js # Product comparison
├── assets/                 # Static assets
│   ├── images/             # Product and UI images
│   ├── icons/              # SVG icons
│   └── banners/            # Banner images
├── store.js                # Redux store configuration
├── main.jsx                # Application entry point
└── App.jsx                 # Main app component with routing
```

## 🎯 Key Features Explained

### **Shopping Cart System**
```javascript
// Cart state management with Redux Toolkit
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    coupon: "",
    couponAmount: "",
    discount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      // Add items with quantity management
    },
    removeFromCart: (state, action) => {
      // Remove items and update totals
    },
    applyCoupon: (state, action) => {
      // Apply discount coupons
    }
  }
});
```

### **Product Management**
- **Dynamic Filtering**: Filter products by category, price, rating
- **Search Functionality**: Real-time search with debouncing
- **Product Comparison**: Side-by-side feature comparison
- **Image Galleries**: Zoom and gallery functionality

### **User Authentication**
- **Protected Routes**: Secure access to user-specific features
- **Form Validation**: Client-side and server-side validation
- **Session Management**: Persistent login sessions
- **Password Security**: Secure password handling

### **Responsive Design**
- **Mobile-First**: Optimized for mobile devices
- **Breakpoint System**: Tailwind CSS responsive utilities
- **Touch Interactions**: Optimized for touch devices
- **Performance**: Optimized images and lazy loading

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_base_url
VITE_APP_NAME=Nest-Ecommerce
VITE_APP_VERSION=1.0.0
```

### **Tailwind CSS Configuration**
The project uses Tailwind CSS v4 with custom configuration:

```javascript
// vite.config.js
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

### **Redux Store Configuration**
```javascript
// store.js
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    auth: authReducer,
  },
});
```

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### **Features**
- **Mobile Navigation**: Collapsible mobile menu
- **Touch-Friendly**: Optimized touch targets
- **Performance**: Optimized for mobile performance
- **Accessibility**: WCAG compliant design

## 🎨 Customization

### **Styling**
- **Tailwind Utilities**: Use Tailwind classes for styling
- **Custom CSS**: Add custom styles in `src/style/input.css`
- **Theme Colors**: Customize colors in Tailwind config
- **Component Styling**: Modular component styling

### **Components**
- **Reusable Components**: All components are modular
- **Props Interface**: Well-defined prop interfaces
- **Error Boundaries**: Graceful error handling
- **Loading States**: Skeleton loaders and spinners

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### **Deploy to Netlify**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings

### **Deploy to GitHub Pages**
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] User registration and login
- [ ] Product browsing and filtering
- [ ] Shopping cart functionality
- [ ] Wishlist management
- [ ] Product comparison
- [ ] Responsive design on all devices
- [ ] Form validation
- [ ] Error handling

### **Performance Testing**
- [ ] Lighthouse audit
- [ ] Core Web Vitals
- [ ] Mobile performance
- [ ] Loading times

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

### **Code Standards**
- Follow ESLint configuration
- Use meaningful commit messages
- Write clean, readable code
- Add comments for complex logic
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

### **Getting Help**
- Create an issue in the repository
- Check the documentation
- Review existing issues and solutions
- Contact the development team

### **Bug Reports**
When reporting bugs, please include:
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2024 | Initial release with core e-commerce features |
| v0.9.0 | 2024 | Beta release with authentication |
| v0.8.0 | 2024 | Alpha release with basic functionality |

## 🎯 Roadmap

### **Upcoming Features**
- [ ] Advanced search with filters
- [ ] User reviews and ratings
- [ ] Social media integration
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)
- [ ] Offline functionality
- [ ] Advanced analytics

### **Performance Improvements**
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Caching strategies
- [ ] Bundle optimization

---

## 🛒 **Happy Shopping!**

This project demonstrates modern React development practices with a focus on user experience, performance, and maintainability. Built for learning purposes and showcasing e-commerce frontend development.

**Built with ❤️ using React, Redux Toolkit, and Tailwind CSS**

---

*Inspired by the [Nest E-commerce Template](https://nest-frontend-v6.vercel.app/index-2#)*
