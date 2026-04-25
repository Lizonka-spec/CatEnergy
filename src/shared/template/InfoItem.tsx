interface ItemProps {
    imgSrc: string;
    description: string;
    number: string;
}
export const InfoItem = ({ imgSrc, description, number }: ItemProps) => {
    return (
        <div className="relative ">
            <span className="hidden md:block absolute -right-4 -top-6 text-8xl font-bold text-gray-200 z-0 2xl:text-[150px] 2xl:right-0">
                {number}
            </span>
            <div className="relative z-10 flex flex-row items-center gap-5 ">
                <img src={imgSrc} alt="#" className="size-15 2xl:size-25" />
                <p className="text-[14px] 2xl:w-[55%] 2xl:text-xl">{description}</p>
            </div>
        </div>
    );
};
