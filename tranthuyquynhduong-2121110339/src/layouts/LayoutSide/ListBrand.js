import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brand_service from "../../services/brand_service";

function ListBrand() {
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await brand_service.getAll();
                setBrands(result.data.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])
    return (
        <div className="listbrand mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Thuong hieu</h3>
            <u>
                {brands.map(function (br, index) {
                    return (
                        <li key={index}>
                            <Link to={"/thuong-hieu/" + br.slug}>{br.name}</Link>
                        </li>
                    );
                })}
            </u>
        </div>
    );
}

export default ListBrand;