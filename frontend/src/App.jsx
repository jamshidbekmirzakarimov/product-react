import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import AddProduct from "./pages/AddProduct";
import Layout from "./pages/Layout";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
}
