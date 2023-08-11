import { useRef } from "react";
import { register } from "swiper/element/bundle";

register();

export const Subject = () => {
  const swiperElRef = useRef(null);

  return (
    <swiper-container
      ref={swiperElRef}
      slidesPerView={1}
      pagination={true}
      scrollbar={true}
      speed={500}
      loop={true}
      navigation={true}
    >
      <swiper-slide id="slide1">
        Slide 1
        <img src="/pictures/jpg/reportage1.jpg" alt="Slide 1" />
      </swiper-slide>
      <swiper-slide id="slide2">
        Slide 2
        <img src="/pictures/jpg/reportage2.jpg" alt="Slide 2" />
      </swiper-slide>
      <swiper-slide id="slide3">
        Slide 3
        <img src="/pictures/jpg/reportage3.jpg" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide id="slide4">
        Slide 4
        <img src="/pictures/jpg/reportage4.jpg" alt="Slide 4" />
      </swiper-slide>
      <swiper-slide id="slide5">
        Slide 5
        <img src="/pictures/jpg/reportage5.jpg" alt="Slide 5" />
      </swiper-slide>
    </swiper-container>
  );
};
