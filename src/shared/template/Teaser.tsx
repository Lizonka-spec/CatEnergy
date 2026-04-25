interface TeaserProps {
    title: string;
    description: string;
    buttonText: string;
    imgSrc: string;
}

export const Teaser = ({ title, description, buttonText, imgSrc }: TeaserProps) => {
    return (
        <div
            className="
      p-5 mx-auto w-[90%] bg-gray-100
      grid 
      grid-cols-[80px_1fr]
      gap-x-4 gap-y-3
      items-center

      md:grid-cols-[1fr_120px]
      md:gap-x-8
      md:py-8

      lg:w-[45%]
    "
        >
            <div
                className="
        rounded-full bg-[#68B738] flex items-center justify-center size-20
        
        md:size-35
        md:col-start-2
        md:row-start-1
        md:row-span-3
        md:justify-self-end
      "
            >
                <img src={imgSrc} alt="#" className="w-4/5 h-4/5 object-contain" />
            </div>

            <h2
                className="
        font-oswald uppercase text-xl
        md:col-start-1
        md:text-3xl
      "
            >
                {title}
            </h2>

            <p
                className="
        text-sm col-span-2

        md:col-span-1 
        md:col-start-1
        md:text-lgы
      "
            >
                {description}
            </p>

            <button
                className="
        font-oswald uppercase cursor-pointer col-span-2 justify-self-start"
            >
                {buttonText}
            </button>
        </div>
    );
};
