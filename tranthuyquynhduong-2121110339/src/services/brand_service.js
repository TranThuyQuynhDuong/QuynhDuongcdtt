import http_api from '../http_axios'

function getAll(){
    return http_api.get('brand/index');
}

function getById(id){
    return http_api.get('brand/show/'+id);

}
function create(brand){
    return http_api.post('brand/store',brand);
}
function update(brand,id){
    return http_api.post('brand/update/'+id,brand);

}
function remove(id){
    return http_api.delete('brand/destroy/'+id);

}

const brand_service = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default brand_service;