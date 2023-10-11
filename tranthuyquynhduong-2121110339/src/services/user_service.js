import http_api from '../http_axios'

function getAll(){
    return http_api.get('user/index');
}

function getById(id){
    return http_api.get('user/show/'+id);

}
function create(user){
    return http_api.post('user/store',user);
}
function update(user,id){
    return http_api.post('user/update/'+id,user);

}
function remove(id){
    return http_api.delete('user/destroy/'+id);

}

const user_service = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default user_service;