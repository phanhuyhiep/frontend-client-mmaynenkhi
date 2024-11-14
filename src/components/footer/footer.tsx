import "./footer.css"
const FooterPage = () => {
  return (
    <div className="footer-controller">
      <div className="footer-contact">
        <h2>Thông tin liên hệ</h2>
        <p className="contact-title">CÔNG TY TNHH THIẾT BỊ CÔNG NGHIỆP VĨNH KHANG</p>
        <p>VPGD: Số 310, Đường Ngô Gia Tự, P.Đức Giang, Q.Long Biên, Hà Nội</p>
        <p>Tài khoản công ty: Công ty TNHH thiết bị CN Vĩnh Khang</p>
        <p>STK: 19135662888013 Ngân hàng TMCP Kỹ thương Việt Nam (techcombank)</p>
        <p>Số TK cá nhân: CHU THI THUY</p>
        <p>Số TK cá nhân: 0660110932006 Ngân hàng MB</p>
        <p>Hoặc: NGUYEN VAN NGOT</p>
        <p>STK: 19028398440016 Ngân hàng Techcombank</p>
        <p>MST: 0109102401</p>
        <p>Tel: 0866.853.326/ 0965.432.981</p>
        <p>Email: vdienmay@gmail.com</p>
        <p>Website: maynenkhipe.com</p>
      </div>
      <div className="footer-map">
      <h2>Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.235258532593!2d105.89336107587303!3d21.06326398659141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a99705616f01%3A0x6a677b3b03d8f9e3!2zMzEwIMSQLiBOZ8O0IEdpYSBU4buxLCDEkOG7qWMgR2lhbmcsIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1731573042494!5m2!1sen!2s"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  )
}

export default FooterPage
