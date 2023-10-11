import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import menu_service from "../../services/menu_service";

function MenuItem(props) {
    const rowmenu = props.menu;
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menu_service.getByParentId('mainmenu', rowmenu.id).then(function (result) {
                setMenus(result.data.menus)
            });
        })();
    }, [])
    if (menus == null) {
        return (
            <li className="nav-item" >
                <Link className="nav-link text-white" to={rowmenu.link}>{rowmenu.name}</Link>
            </li>
        );
    }
    else {
        return (
            <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle text-white"
                    to={rowmenu.link}
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {rowmenu.name}
                </Link>
                <ul
                    className="dropdown-menu text-white"
                    aria-labelledby="navbarDropdown"
                >
                    {menus.map(function (menu1, index) {
                        return (
                            <li key={index}>
                                <Link className="dropdown-item" to={rowmenu.link+"/"+menu1.link}>
                                    {menu1.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }

}

export default MenuItem;