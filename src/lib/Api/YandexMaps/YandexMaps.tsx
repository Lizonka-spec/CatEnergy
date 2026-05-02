import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YandexMaps = () => {
    return (
        <YMaps query={{ apikey: import.meta.env.VITE_YANDEX_MAPS_API_KEY, lang: "ru_RU" }}>
            <div style={{ width: "100%", height: "400px" }}>
                <Map
                    defaultState={{
                        center: [59.938631, 30.323037],
                        zoom: 17,
                    }}
                    modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                    width="100%"
                    height="80%"
                >
                    <Placemark
                        geometry={[59.938631, 30.323037]}
                        properties={{
                            balloonContentHeader: "Cat Energy",
                            balloonContentBody: "Магазин функционального питания для котов",
                            hintContent: "Мы здесь!",
                        }}
                        options={{
                            iconLayout: "default#image",
                            iconImageHref: "/map-pin.png",
                            iconImageSize: [62, 53],
                            iconImageOffset: [-31, -53],

                            hasBalloon: true,
                            hasHint: true,
                            openEmptyBalloon: true,
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    );
};
