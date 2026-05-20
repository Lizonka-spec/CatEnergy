import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const FooterButtons = () => {
    const iconStyles =
        "text-black transition-all duration-300 hover:text-[#68B738] hover:scale-110";

    return (
        <div className="flex flex-col gap-5 p-5 justify-center items-center md:flex-row md:justify-between lg:mx-10">
            <div className="border-b border-gray-200 w-full flex justify-center py-5 md:border-none md:py-0 md:w-auto">
                <h3 className="font-oswald font-bold text-black text-3xl ">cat energy</h3>
            </div>
            <div className="flex items-center">
                <button
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/elizaveta-malash-25882a359/",
                            "_blank",
                        )
                    }
                >
                    <FaLinkedin size={35} className={iconStyles} />
                </button>
                <button onClick={() => window.open("https://github.com/Lizonka-spec", "_blank")}>
                    <FaGithubSquare size={35} className={iconStyles} />
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.instagram.com/lizonka_canfetka?igsh=bG9xZmtrZGYybnJh&utm_source=qr",
                            "_blank",
                        )
                    }
                >
                    <FaSquareInstagram size={35} className={iconStyles} />
                </button>
            </div>
            <div className="border-t border-gray-200 w-full flex justify-center py-5 md:border-none md:py-0 md:w-auto">
                <img src="/MyFreedom.jpg" alt="#" className="w-40 h-15 object-contain" />
            </div>
        </div>
    );
};
