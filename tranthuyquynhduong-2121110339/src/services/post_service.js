import http_api from '../http_axios'

function getAll(){
    return http_api.get('post/index');
}

function getById(id){
    return http_api.get('post/show/'+id);

}
function create(post){
    return http_api.post('post/store',post);
}
function update(post,id){
    return http_api.post('post/update/'+id,post);

}
function remove(id){
    return http_api.delete('post/destroy/'+id);

}

const post_service = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default post_service;