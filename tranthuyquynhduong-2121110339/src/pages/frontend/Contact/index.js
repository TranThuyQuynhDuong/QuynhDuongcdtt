import { Link } from "react-router-dom";
function Contact() {
    return (

        
        <section class="myfooter bg-light text-white py-3 border border-dark border-2">
            
            <div class="container">
            <h3 className="text-center mb-4 text-dark">*** LIÊN HỆ ***</h3>
                <div class="row">
                    <div class="col-md-3 text-white bg-black">
                        <h5 >TÀI KHOẢN</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-white bg-black">
                        <h5>CHÍNH SÁCH</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-white bg-black">
                        <h5>ĐIỀU KHOẢN</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-white bg-black">
                        <h5>LIÊN HỆ</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>

                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <Link>
                            <img id="myImage" src="https://th.bing.com/th/id/R.25f90fe3b7556a5279a3a755d72012c1?rik=LV8xoHIWmkuqnw&pid=ImgRaw&r=0" alt="" />
                        </Link>
                        <div class="address text-dark"><b>Địa chỉ: </b>
                            Ladeco Building, 266 Doi Can Street, Ba Dinh District, Ha Noi
                        </div>
                        <div class="phone text-dark"><b>Hotline: </b>
                            0582827247
                        </div>
                        <div class="email text-dark"><b>Email:</b>
                            duongtran@gmail.com
                        </div>
                        <div class="clock text-dark">
                            <strong>Khách hàng là thượng đế, dịch vụ chăm sóc khách hàng số 1 VN.</strong>

                        </div>

                    </div>

                    <div class="col-md-6 text-black bg-light">
                        <h5>NHẬN TIN KHUYẾN MÃI</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email của bạn" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="text-dark btn btn-outline-danger border-dark border-2" id="basic-addon2">Đăng kí</span>
                        </div>
                        <div class="col-mb-3 text-warning bg-black border border-2  ">
                            <div className="contact-form">
                                <form>
                                    {/* Contact Detail */}
                                    <div className="form-detail">
                                        {/* Input Name */}
                                        <div className="row">
                                            <div className="col my-3">
                                                <input type="text" className="form-control" placeholder="Fisrt Name" />
                                            </div>
                                            <div className="col my-3">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        {/* Email Address */}
                                        <div className="form-input">
                                            <input type="text" className="form-control" placeholder="Email Address" />
                                        </div>
                                        {/* Message */}
                                        <div className="form-input my-3">
                                            <textarea className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    {/* Contact Button */}
                                    <div className="form-button my-3">
                                        <button type="button" class="text-white btn btn-outline-danger border-dark border-2  ">Send</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </section>
    );
}

export default Contact;