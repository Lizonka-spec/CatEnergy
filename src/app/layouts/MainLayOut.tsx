import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../widgets/index";
import { Toaster } from "sonner";

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen items-center mx-auto">
            <Header />
            <main className="grow w-full flex flex-col">
                <Outlet />
                <Toaster duration={1000} position="top-center" />
            </main>
            <Footer />
        </div>
    );
};
