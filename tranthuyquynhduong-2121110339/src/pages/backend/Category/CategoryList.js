import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import category_service from "../../../services/category_service";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function CategoryList() {
    const [statusdel, setStatusDelete] = useState(0);
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await category_service.getAll().then(function (result) {
                setCategorys(result.data.data)
            });
        })();
    }, [statusdel])
    function categoryDelete(id) {
        category_service.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">DANH MỤC</strong>

                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/category/create"><FaPlus />  Thêm</Link>
                    </div>


                </div>

            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th style={{ width: 120 }}>Hình</th>
                            <th>Tên danh mục</th>
                            <th>Slug</th>
                            <th>Ngày tạo</th>
                            <th>Parent ID</th>
                            <th>ID</th>
                            <th>Status</th>
                            <th>Chức năng</th>
                        </tr>

                    </thead>
                    <tbody>
                        {categorys.map(function (category, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <img src={urlImage + 'category/' + category.image} alt="hinh" className="img-fluid" width={400} />

                                    </td>
                                    <td>{category.name}</td>
                                    <td>{category.slug}</td>
                                    <td>{category.created_at}</td>
                                    <td>{category.parent_id}</td>
                                    <td>{category.id}</td>
                                    <td>{category.status}</td>
                                    <td><Link className="btn btn-sm btn-info me-1" to={"/admin/category/show/" + category.id}><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/" + category.id}><FaEdit /></Link>
                                        <button onClick={() => categoryDelete(category.id)} className="btn btn-sm btn-danger"><FaTrash /></button></td>

                                </tr>

                            );



                        })}

                    </tbody>


                </table>


            </div>
        </div>

    );
}

export default CategoryList;