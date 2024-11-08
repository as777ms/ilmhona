import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';

// Import your images
function MyImageSlider({ image1, image2, image3 }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      loop={true} // Enables infinite looping
      autoplay={{
        delay: 3000, // Delay between slides in milliseconds (e.g., 3 seconds)
        disableOnInteraction: false, // Keeps autoplay even after user interaction
      }}
    >
      <SwiperSlide>
        <div className="relative">
          <img src={image1} alt="Slide 1" className="w-full h-auto" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 space-y-4">
            <h1 className="text-2xl font-bold">You can study here</h1>
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
              Start now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Slide 2" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} alt="Slide 3" className="w-full h-auto" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MyImageSlider;
