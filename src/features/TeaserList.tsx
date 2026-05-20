import { Teaser } from "../shared/index";
export const TeaserList = () => {
    return (
        <div className="flex flex-col gap-5 mt-10 tm:mt-70 lg:mt-10 lg:flex-row lg:mx-auto lg:gap-0 lg:w-[85%]">
            <Teaser
                title="похудение"
                description="Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес."
                buttonText="каталог slim"
                imgSrc="/Vector1.png"
            />

            <Teaser
                title="набор массы"
                description="Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!"
                buttonText="каталог pro"
                imgSrc="/Vector2.png"
            />
        </div>
    );
};
