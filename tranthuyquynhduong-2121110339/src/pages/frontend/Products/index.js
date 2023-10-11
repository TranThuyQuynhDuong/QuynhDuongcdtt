import ProductItem from "../../../components/frontend/ProductItem";
import product_service from "../../../services/product_service";
import { useEffect, useState } from "react";


function Product() {
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await product_service.getProductAll(limit, 1).then(function (result) {
                setProducts(result.data.products)
            });
        })();
    }, [limit])
    return (
        <section className="maincontentproduct">
            <div className="container">
                <h3 className="text-center text-danger">Sản Phẩm bán chạy hiện nay</h3>
                <div className="row">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />;
                    })}
                </div>
                <div className="row">
                    <div className="col-12 text-center bg-white">
                        <button className="btn btn-success" onClick={() => setLimit(limit + 8   )}>Xem thêm</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Product;