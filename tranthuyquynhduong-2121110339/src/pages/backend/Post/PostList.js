import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Postservice from "../../../services/post_service";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function PostList() {
    const [posts, setPost] = useState([]);
    
    useEffect(function () {
        (async function () {
            await Postservice.getAll().then(function (result) {
                setPost(result.data.posts_data)
            });
        })();
    }, [])

    async function remove(id) {
        await Postservice.remove(id).then(function () {
            setPost(posts.filter((post) => post.id !== id));
            
        });

    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">POST</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/post/create">
                            <FaSearchPlus />Thêm
                        </Link>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Topic</th>
                            <th>Tiêu Đề</th>
                            <th>Slug</th>
                            <th>Chi Tiết</th>
                            <th>Ảnh</th>
                            <th>Type</th>
                            <th>Ngày Tạo</th>
                            <th>Chức Năng</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(function (Post, index) {
                            return (<tr key={index}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{Post.id}</td>
                                <td>
                                    {Post.name}
                                </td>
                                <td>
                                    {Post.title}
                                </td>
                                <td>
                                    {Post.slug}
                                </td>
                                <td>
                                    {Post.detail}
                                </td>
                                
                                <td><img src={urlImage + 'post/' + Post.image} alt="hinh_anh" style={{ maxWidth: 150 }} /></td>

                                
                                <td>
                                    {Post.type}
                                </td>
                                <td>
                                    {Post.created_at}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/Post/show/" + Post.id}>
                                        <FaEye /> </Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/Post/update/" + Post.id}>
                                        <FaEdit /> </Link>
                                        <button className="btn btn-sm btn-danger" onClick={() => {
                                        if (window.confirm("Xác nhận xóa danh mục này?")) {
                                            remove(Post.id);
                                        }

                                    }}

                                    ><FaTrash /></button>

                                </td>

                            </tr>);
                        }
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default PostList;