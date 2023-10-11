import http_api from '../http_axios'

function getAll(){
    return http_api.get('topic/index');
}

function getById(id){
    return http_api.get('topic/show/'+id);

}
function create(topic){
    return http_api.post('topic/store',topic);
}
function update(topic,id){
    return http_api.post('topic/update/'+id,topic);

}
function remove(id){
    return http_api.delete('topic/destroy/'+id);

}

const topic_service = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default topic_service;