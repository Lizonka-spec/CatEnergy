import ReactMarkdown from "react-markdown";
import { useDiet } from "@/hooks/UseDiet";
import { CircleLoading } from "@/shared";

export const DietPlan = () => {
    const { dietPlan, planLoading } = useDiet();

    const cleanText = dietPlan?.replace("[PROGRAM_SLIM]", "")?.replace("[PROGRAM_PRO]", "")?.trim();

    if (planLoading) {
        return <CircleLoading className="h-40 w-full flex items-center justify-center" />;
    }

    if (!dietPlan) return null;

    return (
        <div className="w-full lg:columns-2 lg:gap-12 lg:border-t lg:pt-8 border rounded-xl p-5 border-gray-300 mt-10">
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
                    ul: ({ ...props }) => <ul className="mb-6 flex flex-col gap-3" {...props} />,
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
    );
};
