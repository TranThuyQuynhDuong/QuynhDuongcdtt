import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Userservice from "../../../services/user_service";
import { urlImage } from "../../../config";
function CustomerShow() {

    const { id } = useParams("id"); //"id" trong routes
    const [Customer, setCustomer] = useState([]);
    useEffect(function () {
        (async function () {
            await Userservice.getById(id).then(function (result) {
                setCustomer(result.data.Customer_data);
            });
        })();
    }, [id]);

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT KHÁCH HÀNG</strong></div>
                    <div className="col-md-6 text-end " >
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/Customer/update/" + Customer.id}>
                            <FaEdit /> </Link>
                        <button className="btn btn-sm btn-danger me-2"><FaTrash /></button>
                        <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                        <Link to="/admin/Customer" className="btn btn-sm btn-info me-2">
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
                            <th>Mã khách hàng</th>
                            <td>{Customer.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thành viên</th>
                            <td>{Customer.name}</td>
                        </tr>
                        <tr>
                            <th>Ảnh đại diện</th>
                            <td><img src={urlImage + 'brand/' + Customer.image} alt="hinh"
                                style={{ maxWidth: 100, maxHeight: 100 }} /></td>
                        </tr>
                        
                        <tr>
                            <th>Email</th>
                            <td>{Customer.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{Customer.phone}</td>
                        </tr>
                        
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{Customer.address}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{Customer.created_at}</td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default CustomerShow;