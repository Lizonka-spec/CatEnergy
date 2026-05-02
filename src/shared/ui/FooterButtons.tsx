import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const FooterButtons = () => {
    return (
        <div className="flex flex-row justify-between p-5 lg:mx-10">
            <h3 className="font-oswald font-bold text-black text-3xl">cat energy</h3>
            <div>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/elizaveta-malash-25882a359/",
                            "_blank",
                        )
                    }
                >
                    <FaLinkedin size={35} />
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.instagram.com/lizonka_canfetka?igsh=bG9xZmtrZGYybnJh&utm_source=qr",
                            "_blank",
                        )
                    }
                >
                    <FaGithubSquare size={35} />
                </button>
                <button onClick={() => window.open("https://github.com/Lizonka-spec")}>
                    <FaSquareInstagram size={35} />
                </button>
            </div>
            <img src="/MyFreedom.jpg" alt="#" className="w-30 h-10" />
        </div>
    );
};
