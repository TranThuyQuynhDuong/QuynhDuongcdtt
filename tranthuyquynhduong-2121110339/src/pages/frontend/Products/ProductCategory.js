import { useEffect, useState } from "react";
import product_service from "../../../services/product_service";
import ProductItem from "../../../components/frontend/ProductItem";
import category_service from "../../../services/category_service";
import { useParams } from "react-router-dom";
import ListCategory from "../../../layouts/LayoutSide/ListCategory";
import ListBrand from "../../../layouts/LayoutSide/ListBrand";

function ProductCategory() {
    const { slug } = useParams(); // do-nam
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const infocategory = await category_service.getBySLug(slug);
                const catid = infocategory.data.data.id; // id cua mau tin co slug=do-nam
                setTitle(infocategory.data.data.name);
                const infoproduct = await product_service.getProductByCategoryId(limit, catid);
                setProducts(infoproduct.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug])
    return (
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-3">
                        <ListCategory />
                        <ListBrand />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-center">{title}</h3>
                        <div className="row">
                            {products.map(function (product, index) {
                                return <ProductItem product={product} key={index} />
                            })}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center my-4">
                                <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCategory;