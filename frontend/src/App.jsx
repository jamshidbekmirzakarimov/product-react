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
          <Route index element={<AllProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
}
