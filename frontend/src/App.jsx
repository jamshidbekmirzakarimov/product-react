import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import AddProduct from "./pages/AddProduct";
import Layout from "./pages/Layout";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AllProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Route>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}
