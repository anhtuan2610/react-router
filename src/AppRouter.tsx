import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import NavBar from "./pages/NavBar";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/product/:id/edit" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
}
