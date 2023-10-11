import http_api from '../http_axios'

function getAll(){
    return http_api.get('order/index');
}

function getById(id){
    return http_api.get('order/show/'+id);

}
function create(order){
    return http_api.post('order/store',order);
}
function update(order,id){
    return http_api.post('order/update/'+id,order);

}
function remove(id){
    return http_api.delete('order/destroy/'+id);

}

const order_service = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default order_service;