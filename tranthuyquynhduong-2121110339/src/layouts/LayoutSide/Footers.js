import './FooterStyle.css';
function Footer() {
  return ( 
    
      <section className="footer pt-4">
        <footer className="site-footer">
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-6">
      <div className="widget">
        <h3 className="widget-title">About Us</h3>
        <p> Butterfly® là lựa chọn hàng đầu với kinh nghiệm trong lĩnh vực trái cây khẩu, Butterfly® đem đến nhiều lựa chọn yêu cầu của khách hàng.</p>
        <div className="social-links">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="widget">
        <h3 className="widget-title">Contact Info</h3>
      <p>20 Tang Nhon Phu, Phuoc Long B, Quan 9, Tp.HCM</p>
        
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="widget">
        <h3 className="widget-title">Mở rộng</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Google</a></li>
          <li><a href="#">Tiwtter</a></li>
          <li><a href="#">Zalo</a></li>
        </ul>
      </div>
    </div>

    <div className="col-lg-3 col-md-6">
      <div className="widget">
        <h3 className="widget-title">Newsletter</h3>

        <form className="newsletter-form">
          <input type="email" name="email" placeholder="Your email address"/>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</div>
</footer>

      </section>

   );
}

export default Footer;