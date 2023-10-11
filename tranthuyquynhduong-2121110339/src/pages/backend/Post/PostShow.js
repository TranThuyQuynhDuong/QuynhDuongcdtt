import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../../../services/post_service";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";
import { urlImage } from "../../../config";
import { FaTrash } from "react-icons/fa";

function PostShow() {
    const {id}=useParams("id");
    const [post,setPost]=useState([]);
    const navigate = useNavigate(); 
    useEffect(function(){
        (async function(){
            await postservice.getById(id).then(function(result){
                setPost(result.data.post_data);
            })
        })();
    },[]);

    
    async function remove(id) {
        await postservice.remove(id).then(function () {
        
            navigate('../../admin/post', { replace: true });
        });

    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT BÀI VIẾT</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/post/update/" + post.id}><FiEdit />Sửa</Link>
                        <button className="btn btn-sm btn-danger" onClick={() => {
                                        if (window.confirm("Xác nhận xóa danh mục này?")) {
                                            remove(post.id);
                                        }

                                    }}

                                    ><FaTrash /></button>
                        <Link to="/admin/post" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{post.id}</td>
                        </tr>
                        <tr>
                            <th>Topic Id</th>
                            <td>{post.topic_id}</td>
                        </tr>
                        <tr>
                            <th>Tiêu đề</th>
                            <td>{post.title}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{post.slug}</td>
                        </tr>

                        <tr>
                            <th>Chi tiết</th>
                            <td>{post.detail}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={urlImage + 'post/' + post.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{post.type}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{post.status}</td>
                        </tr>
                        <tr>
                            <th>Từ khóa</th>
                            <td>{post.metakey}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{post.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{post.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default PostShow;