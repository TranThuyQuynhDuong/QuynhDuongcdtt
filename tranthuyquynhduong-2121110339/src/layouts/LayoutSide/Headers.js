import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import { FaSearch, FaShoppingBag } from 'react-icons/fa';


import "./HeaderStyle.css"
function Headers() {
    return (
        <section className="myheader">
            <div className="container py-3">
                <div className="row ">
                    <div className="col-md-3 ">
                        <Link>
                            <img src={Logo} className="img-fluid" alt="Logo" />
                        </Link>
                    </div>
                    <div className="col-md ">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-1 text-danger"><i className="fa-solid fa-phone"></i></div>
                                    </div>
                                    <div className="col-9">
                                        Tư vấn hỗ trợ<br /> 
                                        <strong className="text-dark">0349544297</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="fs-1 text-danger"><i className="fa-regular fa-circle-user"></i></div>
                                    </div>
                                    <div className="col-9">
                                        Xin chào<br />
                                        <strong className="text-dark">Đăng nhập</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <div className="row">
                            <div className="col">
                            
                                <FaShoppingBag />
                                <Link href="#" className=" position-relative">
                                    <span className="fs-2"><i className="fa-regular fa-heart"></i></span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="col">
                                <FaShoppingBag />
                                <Link href="#" className=" position-relative">
                                    <span className="fs-2"><i className="fa-solid fa-bag-shopping"></i></span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        2
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="col">
                                <FaShoppingBag />                            <Link href="#" className=" position-relative">
                                    <span className="fs-2"><i className="fa-regular fa-comment"></i></span>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>

    );
}

export default Headers;