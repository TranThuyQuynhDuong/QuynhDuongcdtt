import { Link } from "react-router-dom";
import menu_service from "../../services/menu_service";
import { useState } from "react";
import { useEffect } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menu_service.getByParentId('mainmenu', 0).then(function (result) {
        setMenus(result.data.menus)
      });
    })();
  }, [])
  // const listMenu = [
  //   { name: "TRANG CHỦ", Link: "/" },
  //   { name: "SẢN PHẨM", Link: "san-pham" },
  //   { name: "LIÊN HỆ", Link: "lien-he" },
  // ];

  return (
    <section className="bg-dark" text-white>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <Link class="navbar-brand text-white d-md-none d-sm-block" to="#">
              Shop Duong
            </Link>
            <button
              class="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* chay vong lap dua dang fucntion con 1 kieu viet nua la erro fucntion ()=>{} */}
                {menus.map(function (menu, index) {
                  return <MenuItem key={index} menu={menu} />;
                })}

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Menu;
