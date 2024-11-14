import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const SwiperComponent = () => {
  return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1} // Điều chỉnh khoảng cách giữa các slide
        slidesPerView={1} // Số slide hiển thị cùng lúc
        // navigation // Bật nút điều hướng
        pagination={{ clickable: true }} // Bật phân trang với nút bấm
        // scrollbar={{ draggable: true }} // Bật thanh cuộn có thể kéo
        loop={true} // Bật tính năng vòng lặp slider
        breakpoints={{
          640: { // kích thước màn hình
            slidesPerView: 1,  // Số slide hiển thị trong 1 khung hình
            spaceBetween: 20,
          },
          768: { // kích thước màn hình
            slidesPerView: 1,  // Số slide hiển thị trong 1 khung hình
            spaceBetween: 30,
          },
          1024: { // kích thước màn hình
            slidesPerView: 1, // Số slide hiển thị trong 1 khung hình
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide className="slider-item">
          <img
            src="https://mauweb.monamedia.net/xedayhang/wp-content/uploads/2018/03/banner1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mauweb.monamedia.net/xedayhang/wp-content/uploads/2018/03/banner2.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
  );
};

export default SwiperComponent;
