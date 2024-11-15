import "./homePage.module.css";
import SwiperComponent from "./components/swiper/swiperComponent";
import TrendingComponent from "./components/trending/trending";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="slider">
        <SwiperComponent />
      </div>

      <div className="trending">
        <TrendingComponent />
      </div>

      <div className="categories">
        <TrendingComponent />
      </div>
    </div>
  );
};

export default HomePage;
