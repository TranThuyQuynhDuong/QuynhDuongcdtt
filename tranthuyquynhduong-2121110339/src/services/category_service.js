import http_api from '../http_axios'

function getAll(){
    return http_api.get('category/index');
}

function getById(id){
    return http_api.get('category/show/'+id);

}
function create(category){
    return http_api.post('category/store',category);
}
function update(category,id){
    return http_api.post('category/update/'+id,category);

}
function remove(id){
    return http_api.delete('category/destroy/'+id);

}
function getCategoryByParentId(parent_id){
    return http_api.get('category_list/'+parent_id);

}
function getBySLug(slug){
    return http_api.get(`category/show/${slug}`);

}

const category_service = {
    getCategoryByParentId:getCategoryByParentId,
    getBySLug:getBySLug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default category_service;