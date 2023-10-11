import Home from "../pages/frontend/Home";
import Contact from "../pages/frontend/Contact";
import Product from "../pages/frontend/Products";
import ProductDetail from "../pages/frontend/Products/ProductDetail";
import ProductCategory from "../pages/frontend/Products/ProductCategory";
import ProductBrand from "../pages/frontend/Products/ProductBrand";
const RouterPublic = [
    {path: '/', component:Home},
    {path: '/san-pham', component:Product},
    { path: '/chi-tiet-san-pham/:slug', component: ProductDetail },
    { path: '/danh-muc-san-pham/:slug', component: ProductCategory },
    { path: '/thuong-hieu/:slug', component: ProductBrand },
    { path: '/lien-he', component: Contact }
 ];
 export default RouterPublic;