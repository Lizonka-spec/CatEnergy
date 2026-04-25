import { Logo } from "../shared/index";
import { Navbar } from "../features/index";

export const Header = () => {
    return (
        <header className="w-full bg-white p-4">
            <div className=" flex items-center justify-between">
                <div className="shrink-0">
                    <Logo />
                </div>

                <div className="flex items-center">
                    <Navbar />
                </div>
            </div>
        </header>
    );
};
