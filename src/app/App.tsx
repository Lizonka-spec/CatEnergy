import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Home, Auth, Catalog, Cart, Favorites, Program } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

const App = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<MainLayout />}>
                <Route path="/" index element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="program" element={<Program />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
