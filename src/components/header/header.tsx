import "./header.css";
const HeaderPage = () => {
  return (
    <div className="header-main">
      <div className="header-title">
        <p>Công ty TNHH thiết bị công nghiệp Vĩnh Khang</p>
        <p>Tổng đài tư vấn: 09-123456</p>
      </div>
      <div className="header-tool">
        <div className="header-logo">
          <img src="https://res.cloudinary.com/dq9oahl3j/image/upload/v1731558483/ivtxmsz74ilchpjywtv0.jpg" alt="logo" />
        </div>
        <div className="header-search">
          <input type="text" placeholder="Tìm kiếm" />
          <button>Search</button>
        </div>
        <div className="header-cart">
          <p>Giỏ hàng: 0đ</p>
          <img src="./images/cart.png" alt="" />
        </div>
      </div>
      <div className="header-menu">
        <ul>
          <li>Danh mục sản phẩm</li>
          <li>Trang chủ</li>
          <li>Giới thiệu</li>
          <li>Cửa hàng</li>
          <li>Tin tức</li>
          <li>liên hệ</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
