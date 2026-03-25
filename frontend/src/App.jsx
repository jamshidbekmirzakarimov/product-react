import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import AddProduct from "./pages/AddProduct";
import Layout from "./pages/Layout";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from './pages/Cart'

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<AllProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Route>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
