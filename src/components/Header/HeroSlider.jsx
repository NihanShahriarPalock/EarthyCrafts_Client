import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper mt-5 relative lg:h-[calc(100vh-100px)]'>
        <div className='absolute z-20 lg:left-1/2 transform lg:-translate-x-1/2 top-5 md:top-14 lg:top-1/4 flex flex-col items-center'>
          <p
            data-aos='fade-up-right'
            className='text-black text-center font-bold text-3xl md:text-5xl'>
            Welcome To Dreamy Property
          </p>
          <p
            data-aos='fade-up-right'
            data-aos-delay='300'
            className='mt-4 text-center text-gray-600 font-semibold text-3xl'>
            Your journey to Home Ownership, guided by expertise, trust, and
            personalized service
          </p>
          <p
            data-aos='fade-up-right'
            data-aos-delay='700'
            className='text-white hover:text-black bg-slate-400 hover:bg-white mt-4 text-3xl p-3 rounded-lg cursor-pointer border-2 '>
            Explore Now
          </p>
        </div>
        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/kGMQrNG/slider55.png')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/GTnNK3W/slider-2.jpg')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/8cp6cSF/slider-3.jpg')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/mh4zJVQ/slider-4.jpg')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
