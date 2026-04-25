export const PromoContent = () => {
    return (
        <div
            className="relative
        bg-[url('/index-background-mobile.png')] bg-no-repeat bg-cover aspect-square
        tm:bg-none tm:aspect-auto tm:bg-white
        lg:bg-[url('/index-background-desktop.png')] lg:bg-no-repeat 
        lg:bg-right lg:bg-contain lg:h-130 lg:aspect-auto"
        >
            <div
                className="
            flex flex-col items-center text-white gap-10 text-center py-11 px-8 font-oswald
            tm:items-start tm:text-left tm:text-black tm:mx-auto tm:w-[90%] tm:pt-20
            lg:absolute lg:left-0 lg:w-[40%]"
            >
                <h1 className="text-4xl md:text-6xl lg:text-5xl">
                    Функциональное питание для котов
                </h1>
                <p className="uppercase text-3.5">
                    Занялся собой? Займись котом!
                </p>
            </div>
        </div>
    );
};
