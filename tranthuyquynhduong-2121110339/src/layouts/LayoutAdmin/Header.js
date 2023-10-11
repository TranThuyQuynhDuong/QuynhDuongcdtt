import { Link } from "react-router-dom";

function Header() {
    return (
        <section className="header bg-primary ">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white" to="/admin">Quản trị</Link>
                        <button className="navbar-toggler text-white" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item dropdown text-white">
                                    <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Quản lí sản phẩm
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/category">Danh mục</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown text-white">
                                    <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Quản lí đơn hàng
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admin/order">Hóa đơn</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/orderdetail">Chi tiết hóa đơn</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown text-white">
                                    <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Quản lí người dùng
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admin/user">Người dùng</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/contact">Liên hệ</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown text-white">
                                    <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Khác
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/admin/menu">Menu</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/slider">Slider</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/topic">Topic</Link></li>
                                        <li><Link className="dropdown-item" to="/admin/post">Post</Link></li>


                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        </section>
    );
}

export default Header;