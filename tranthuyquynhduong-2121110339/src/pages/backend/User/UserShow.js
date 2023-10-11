import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import userservice from "../../../services/user_service";
function UserShow() {

    const { id } = useParams("id"); //"id" trong routes
    const [user, setUser] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {
                setUser(result.data.user_data);
            });
        })();
    }, [id]);

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT NGƯỜI DÙNG</strong></div>
                    <div className="col-md-6 text-end " >
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/user/update/" + user.id}>
                            <FaEdit /> </Link>
                        <button className="btn btn-sm btn-danger me-2"><FaTrash /></button>
                        <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                        <Link to="/admin/user" className="btn btn-sm btn-info me-2">
                            Về danh sách
                        </Link>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th>Tên n</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{user.phone}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{user.created_at}</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default UserShow;