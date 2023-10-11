import http_api from '../http_axios'

function getAll(){
    return http_api.get('menu/index');
}

function getById(id){
    return http_api.get('menu/show/'+id);

}
function create(menu){
    return http_api.post('menu/store',menu);
}
function update(menu,id){
    return http_api.post('menu/update/'+id,menu);

}
function remove(id){
    return http_api.delete('menu/destroy/'+id);

}
function getByParentId(position,parent_id=0){
    return http_api.get('menu_list/'+position+'/'+parent_id);

}

const menu_service = {
    getByParentId: getByParentId,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default menu_service;