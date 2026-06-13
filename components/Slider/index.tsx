'use client'
import SliderStyles from "./slider.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ImageSlider({ about_images }:any) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        0:   { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024:{ slidesPerView: 3 },
      }}
    >
      {about_images.map((item:any, index:number) => (
        <SwiperSlide key={index}>
          <div className={SliderStyles.slider}>
            <Image
              src={item.image}
              alt={`Şəkil ${index + 1}`}
              fill
              className={SliderStyles.images}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}