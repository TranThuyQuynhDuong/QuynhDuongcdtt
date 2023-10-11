import http_api from '../http_axios'

function getAll(){
    return http_api.get('product/index');
}

function getById(id){
    return http_api.get('product/show/'+id);

}
function create(product){
    return http_api.post('product/store',product);
}
function update(product,id){
    return http_api.post('product/update/'+id,product);

}
function remove(id){
    return http_api.delete('product/destroy/'+id);

}
function getProductAll(limit){
    return http_api.get(`product_all/${limit}`);
}
function getProductCategoryAll(limit,category_id){
    return http_api.get(`product_all/${category_id}/${limit}`);
}
function getProductBySlug(slug){
    return http_api.get('product_detail/'+slug);
}
function getProductHome(limit,category_id){
    return http_api.get(`product_home/${limit}/${category_id}`);
}

function getProductByCategoryId(limit,category_id){
    return http_api.get(`product_category/${limit}/${category_id}`);
}
function getProductByBrandId(limit,brand_id){
    return http_api.get(`product_brand/${limit}/${brand_id}`);
}

const product_service = {
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getProductCategoryAll:getProductCategoryAll,
    getProductHome:getProductHome,
    getProductByCategoryId:getProductByCategoryId,
    getProductByBrandId:getProductByBrandId,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default product_service;