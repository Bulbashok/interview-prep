import './slider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import img1 from '../../../../assets/slider/img1.jpg';
import img2 from '../../../../assets/slider/img2.jpg';
import img3 from '../../../../assets/slider/img3.jpg';

const images = [img1, img2, img3];

export default function Slider() {
  return (
    <>
      <div className="slider">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          style={
            {
              width: '100%',
              height: 'auto',
              '--swiper-pagination-color': 'var(--swiper-pagination)',
              '--swiper-pagination-bullet-inactive-color': '#8b8b8b',
            } as React.CSSProperties
          }
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img className="slider__img" src={img} alt={`slide-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
