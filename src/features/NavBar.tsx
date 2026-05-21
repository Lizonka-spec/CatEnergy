import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { LogOutButton } from "@/shared/ui/Buttons";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `pb-1 w-fit mx-auto border-b-2 text-[9px] md:text-sm lg:text-base font-bold uppercase tracking-tighter md:tracking-normal ${
            isActive ? "border-green-500 text-green-600" : "border-transparent text-slate-600"
        }`;

    return (
        <nav className="flex items-center">
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-4xl">
                    {isOpen ? <IoCloseOutline /> : <CiMenuBurger />}
                </button>

                {isOpen && (
                    <div className="fixed top-15 left-0 w-full bg-white shadow-2xl p-4 z-50 flex gap-4 items-center text-center">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
                            Главная
                        </NavLink>
                        <NavLink
                            to="/catalog"
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            Каталог продукции
                        </NavLink>
                        <NavLink to="/cart" onClick={() => setIsOpen(false)} className={linkClass}>
                            Корзина
                        </NavLink>
                        <NavLink
                            to="/favorites"
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            Избранное
                        </NavLink>
                        <NavLink
                            to="/program"
                            onClick={() => setIsOpen(false)}
                            className={linkClass}
                        >
                            Подбор программы
                        </NavLink>
                        <LogOutButton />
                    </div>
                )}
            </div>

            <div className="hidden md:flex items-center text-center gap-6 lg:gap-12 justify-center">
                <NavLink to="/" className={linkClass}>
                    Главная
                </NavLink>
                <NavLink to="/catalog" className={linkClass}>
                    Каталог продукции
                </NavLink>
                <NavLink to="/cart" onClick={() => setIsOpen(false)} className={linkClass}>
                    Корзина
                </NavLink>
                <NavLink to="/favorites" onClick={() => setIsOpen(false)} className={linkClass}>
                    Избранное
                </NavLink>
                <NavLink to="/program" className={linkClass}>
                    Подбор программы
                </NavLink>
                <LogOutButton />
            </div>
        </nav>
    );
};
