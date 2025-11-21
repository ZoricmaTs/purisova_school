import {useEffect, useRef} from 'react';
import './style.scss';

const coordinates: [number, number] = [42.848644, 74.608399];

export function YMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.onload = () => {
      // @ts-ignore
      ymaps.ready(() => {
        // @ts-ignore
        const map = new ymaps.Map(mapRef.current, {
          center: coordinates, // координаты
          zoom: 17,
        });

        // Добавляем метку
        // @ts-ignore
        const placemark = new ymaps.Placemark(coordinates);
        map.geoObjects.add(placemark);
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div className={'yMap'} ref={mapRef} />;
}