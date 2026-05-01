import ReactMarkdown from "react-markdown";
import { useDiet } from "@/hooks/UseDiet";
import { useNavigate } from "react-router-dom";

export const DietPlan = () => {
    const { dietPlan, isLoading } = useDiet();

    const isSlim = dietPlan?.includes("[PROGRAM_SLIM]");
    const isPro = dietPlan?.includes("[PROGRAM_PRO]");

    const cleanText = dietPlan?.replace("[PROGRAM_SLIM]", "")?.replace("[PROGRAM_PRO]", "")?.trim();

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="p-10 text-center font-oswald uppercase text-xl animate-pulse">
                Загружаем план...
            </div>
        );
    }

    if (!dietPlan) return null;

    return (
        <div className="flex flex-col gap-8 p-6 rounded-3xl bg-white lg:p-12">
            <div className="w-full flex justify-center bg-slate-50 rounded-2xl py-6">
                {isSlim && (
                    <img
                        src="/catalog-6-desktop.png"
                        alt="Slim"
                        className="size-60 object-contain"
                        onClick={() => navigate("/catalog")}
                    />
                )}
                {isPro && (
                    <img
                        src="/catalog-2-desktop 1.png"
                        alt="Pro"
                        className="size-60 object-contain"
                        onClick={() => navigate("/catalog")}
                    />
                )}
            </div>

            <div className="w-full lg:columns-2 lg:gap-12 lg:border-t lg:pt-8 border rounded-xl p-5 border-gray-300">
                <ReactMarkdown
                    components={{
                        h2: ({ ...props }) => (
                            <h2
                                className="break-after-avoid flex items-center text-left gap-2 text-2xl font-bold text-gray-900 mt-8 first:mt-0 mb-4 border-b-2 border-[#68B738] pb-2 font-oswald uppercase tracking-wide"
                                {...props}
                            />
                        ),
                        p: ({ ...props }) => (
                            <p
                                className="text-gray-600 leading-relaxed mb-4 text-base lg:text-lg"
                                style={{ orphans: 3, widows: 3 }}
                                {...props}
                            />
                        ),
                        ul: ({ ...props }) => (
                            <ul className="mb-6 flex flex-col gap-3" {...props} />
                        ),
                        li: ({ ...props }) => (
                            <li
                                className="break-inside-avoid-column flex items-start gap-3 bg-slate-50 p-4 rounded-xl border-l-4 border-[#68B738] text-gray-700 shadow-sm"
                                {...props}
                            >
                                <span className="text-[#68B738] font-bold">•</span>
                                <div>{props.children}</div>
                            </li>
                        ),
                        strong: ({ ...props }) => {
                            // const content = String(props.children).toLowerCase();
                            // const isCritical = /внимание|критич|опасно|запрещено/i.test(content);
                            return (
                                <strong
                                    className="font-bold px-1.5 py-0.5 rounded text-[#68B738] bg-green-50"
                                    {...props}
                                />
                            );
                        },
                    }}
                >
                    {cleanText || ""}
                </ReactMarkdown>
            </div>
        </div>
    );
};
