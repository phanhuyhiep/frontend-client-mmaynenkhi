import "./homePage.module.css";
import SwiperComponent from "./components/swiper/swiperComponent";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="slider">
        <SwiperComponent />
      </div>
    </div>
  );
};

export default HomePage;
