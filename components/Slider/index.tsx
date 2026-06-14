'use client'
import SliderStyles from "./slider.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function ImageSlider({ about_images }: any) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={"auto"}
      spaceBetween={0}       
      loop={true}
      speed={2500}                         
      autoplay={{
        delay: 0,                           
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      allowTouchMove={false} 
    >
      {about_images.map((item: any, index: number) => (
        <SwiperSlide key={index} className={SliderStyles.slide}>
          <div className={SliderStyles.slider}>
            <img
              src={item.image}
              alt={`image ${index + 1}`}
              className={SliderStyles.images}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}