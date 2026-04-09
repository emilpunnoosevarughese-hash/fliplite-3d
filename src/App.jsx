import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Settings from './pages/Settings'
import PrivacySecurity from './pages/PrivacySecurity'
import About from './pages/About'
import LegalDisclaimer from './pages/LegalDisclaimer'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('app-theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('app-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('app-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=48')
      .then(res => res.json())
      .then(data => {
        const formattedData = data.products.map(item => {
          const inrPrice = Math.round(item.price * 83);
          const inrMrp = Math.round(inrPrice / (1 - (Math.max(item.discountPercentage || 10, 5) / 100)));
          
          let categoryName = "Accessories";
          if (item.category === "smartphones" || item.category === "mobile-accessories") {
            categoryName = "Mobiles";
          } else if (item.category === "laptops" || item.category === "tablets") {
            categoryName = "Electronics";
          } else if (item.category.includes("home") || item.category === "furniture") {
            categoryName = "Furniture";
          } else if (item.category.includes("mens") || item.category.includes("womens")) {
            categoryName = "Fashion";
          }

          return {
            id: item.id,
            title: item.title,
            category: categoryName,
            rating: item.rating,
            reviews: Math.floor(Math.random() * 800) + 120,
            price: inrPrice,
            mrp: inrMrp,
            discount: `${Math.round(item.discountPercentage || 25)}% off`,
            image: item.thumbnail,
            badge: item.rating > 4.6 ? 'Trending' : null,
            description: item.description
          };
        });
        setProducts(formattedData);
      })
      .catch(err => console.error("API Fetch Error:", err))
      .finally(() => setLoadingProducts(false));
  }, []);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev // Already added, ignore
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) }
      }
      return item
    }))
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <AuthProvider>
      <Router>
        <Navbar cartCount={totalCartItems} />
        <div className="page-container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <Home 
              products={products}
              loading={loadingProducts}
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          } />
          <Route path="/cart" element={
            <Cart 
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          } />
            <Route path="/checkout" element={
              <Checkout cartItems={cartItems} clearCart={clearCart} />
            } />
            <Route path="/settings" element={
              <Settings toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            } />
            <Route path="/privacy" element={
              <PrivacySecurity />
            } />
            <Route path="/about" element={
              <About />
            } />
            <Route path="/legal" element={
              <LegalDisclaimer />
            } />
            <Route path="/product/:id" element={
            <ProductDetails 
              products={products}
              loading={loadingProducts}
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
            />
          } />
        </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
