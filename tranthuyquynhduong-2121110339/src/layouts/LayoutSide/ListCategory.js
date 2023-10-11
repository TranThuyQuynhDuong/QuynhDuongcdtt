import { Link } from "react-router-dom";
import category_service from "../../services/category_service";
import { useEffect, useState } from "react";

function ListCategory() {
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await category_service.getCategoryByParentId(0);
                setCategorys(result.data.categorys);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (
        <div className="listcategory mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Danh muc san pham</h3>
            <u>
                {categorys.map(function (cat, index) {
                    return (
                        <li key={index}>
                            <Link to={"/danh-muc-san-pham/" + cat.slug}>{cat.name}</Link>
                        </li>
                    );
                })}

            </u>
        </div>
    );
}

export default ListCategory;