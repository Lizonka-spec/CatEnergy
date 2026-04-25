import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Home, Auth, Catalog, Cart, Favorites } from "../pages";

const App = () => {
    return (
        <Routes>
            <Route path="/auth" index element={<Auth />} />
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="cart" element={<Cart />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="program" />
            </Route>
        </Routes>
    );
};

export default App;
