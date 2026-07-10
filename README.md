<div align="center">
  <img src="src/assets/logo.svg" alt="Nest E-commerce Logo" width="200" />
  
  # Nest E-commerce
  
  **A modern, fully-featured and highly responsive E-commerce Web Application**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
  [![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<br />

## 📖 Overview

**Nest E-commerce** is a comprehensive and modern online shopping platform built with React and Vite. It aims to provide users with a seamless, blazing-fast, and interactive shopping experience. From browsing trending products and categorizing daily best-sells to managing shopping carts, wishlists, and authenticating users securely, Nest is designed to be a complete front-end blueprint for real-world e-commerce businesses.

## 🖼️ Screenshots

> **Note:** Replace the src URLs below with actual paths to your project screenshots.

<div align="center">
  <img src="/public/assets/website screens/bg1 (8).png" alt="Home Page" width="800"/>
  <br/>
  <em>Home Page</em>
</div>

<br/>

<div align="center">
  <img src="/public/assets/website screens/bg1 (7).png" alt="Cart" width="49%"/>
  <img src="/public/assets/website screens/bg1 (1).png" alt="Authentication" width="49%"/>
</div>

<div align="center">
  <img src="/public/assets/website screens/bg1 (2).png" alt="Home Page" width="800"/>
  <br/>
  <em>Offers Page</em>
</div>

<br/>

<div align="center">
  <img src="/public/assets/website screens/bg1 (3).png" alt="Products Page" width="49%"/>
  <img src="/public/assets/website screens/bg1 (6).png" alt="Wishlist Page" width="49%"/>
</div>

## ✨ Features

- **User Authentication:** Secure Sign Up, Log In, and Log Out functionality powered by Firebase Auth.
- **Product Management:** Browse products by categories, filter by tags, and view detailed product pages.
- **Shopping Cart & Checkout:** Add/remove items, update quantities, and calculate real-time totals.
- **Wishlist & Compare:** Save favorite products and compare different items side-by-side.
- **Interactive UI:** Smooth sliders (powered by Swiper), toast notifications, and modern hover effects.
- **Responsive Design:** Mobile-first approach ensuring perfect layout across all devices using Tailwind CSS.
- **Global State Management:** Efficient state handling using Redux Toolkit slices (Cart, Wishlist, Compare, Auth, Products).

## 🛠️ Tech Stack

- **Framework:** React.js 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Backend & Auth:** Firebase
- **UI Components & Icons:** Material-UI (MUI) Icons, Swiper (for carousels)
- **Notifications:** React Hot Toast

## ⚙️ Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Nest-Ecommerce.git
   cd Nest-Ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Firebase configuration (See the [Environment Variables](#-environment-variables) section below).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Visit `http://localhost:5173` in your browser.

## 💻 Usage

Once the application is running, you can:
- Navigate through different categories in the Header.
- Click on any product to open the "Quick View" or go to the full Product Details page.
- Create a new account via the `/SignUp` route to access the protected `/MyAccount` dashboard.
- Add products to your Cart and observe the counter update in the Header in real-time.

**Example: Redux Dispatching (Adding to Cart)**
```javascript
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';

const handleAddToCart = (product) => {
  dispatch(addItemToCart(product));
  toast.success("Added to cart!");
};
```

## 📂 Project Structure

```text
📦 Nest-Ecommerce
 ┣ 📂 public               # Static assets
 ┣ 📂 src
 ┃ ┣ 📂 assets             # Images, logos, and banners
 ┃ ┣ 📂 components         # Reusable UI components (Header, Footer, UI base)
 ┃ ┃ ┗ 📂 Product          # Modularized product components (Card, Actions, etc.)
 ┃ ┣ 📂 features           # Redux Toolkit Slices (auth, cart, products, wishlist, compare)
 ┃ ┣ 📂 pages              # Main route pages (Home, Cart, Login, etc.)
 ┃ ┣ 📂 style              # Global CSS and Tailwind configurations
 ┃ ┣ 📜 App.jsx            # Main App component & Routes definition
 ┃ ┣ 📜 firebase.js        # Firebase initialization and config
 ┃ ┣ 📜 main.jsx           # React DOM rendering & Redux Provider
 ┃ ┗ 📜 store.js           # Global Redux Store configuration
 ┣ 📜 index.html           # Main HTML template
 ┣ 📜 package.json         # Project metadata and dependencies
 ┗ 📜 vite.config.js       # Vite configuration
```

## 🔐 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. You can get these keys by creating a new project in the [Firebase Console](https://console.firebase.google.com/).

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
*(Note: Be sure to update `firebase.js` to read from `import.meta.env` if you haven't already!)*

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

**Your Name** - [mohamedmagdyelsayed7@gmail.com](mailto:mohamedmagdyelsayed7@gmail.com)

Project Link: [https://github.com/mohamedmagdy-dev/Nest-Ecommerce](https://github.com/mohamedmagdy-dev/Nest-Ecommerce)

---
<div align="center">
  <i>Built with ❤️ by an awesome developer</i>
</div>
