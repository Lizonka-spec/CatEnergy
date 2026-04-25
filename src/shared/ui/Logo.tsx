export const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <img
                src="/logo-mobile.png"
                className="w-12 h-10 lg:hidden"
                alt="Logo"
            />

            <img
                src="/text-logo.png"
                className="w-30 h-6 lg:hidden"
                alt="Middle Decor"
            />

            <img
                src="/logo-desktop.png"
                className="hidden lg:block w-60 h-17 "
                alt="Logo"
            />
        </div>
    );
};
