import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAnalytics from "./admin/AdminAnalytics";
import AdminChartPage from "./admin/AdminChartPage";
import AdminCreateProductPage from "./admin/AdminCreateProductPage";
import AdminEditProductPage from "./admin/AdminEditProductPage";
import AdminEditUserPage from "./admin/AdminEditUserPage";
import AdminOrderDetails from "./admin/AdminOrderDetails";
import AdminOrderPage from "./admin/AdminOrderPage";
import AdminProductPage from "./admin/AdminProductPage";
import AdminUserPage from "./admin/AdminUserPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import ProductListPage from "./pages/ProductListPage";
import Register from "./pages/Register";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetails from "./pages/user/UserOrderDetails";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ScrollToTop from "./utilits/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route element={<ProtectedRoute admin={false} />}>
          <Route path="/user/user-profile" element={< UserProfilePage />} />
          <Route path="/user/user-order" element={<UserOrdersPage />} />
          <Route path="/user/user-order-details" element={<UserOrderDetails />} />
          <Route path="/user/user-cart-details" element={<UserCartDetailsPage />} />
        </Route>
        <Route element={<ProtectedRoute admin={true} />}>
          <Route path="/admin/edit-product" element={< AdminEditProductPage />} />
          <Route path="/admin/create-product" element={<AdminCreateProductPage />} />
          <Route path="/admin/products" element={<AdminProductPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/order-page" element={<AdminOrderPage />} />
          <Route path="/admin/order-details" element={<AdminOrderDetails />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/chart" element={<AdminChartPage />} />
          <Route path="/admin/user" element={<AdminUserPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
