import { Link, useParams } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import orderservice from "../../../services/order_service";
import { useEffect, useState } from "react";

function OrderShow() {
    const { id } = useParams("id")
    const [orders, setOrder] = useState([]);
    useEffect(function () {
        (async function () {
            await orderservice.getById(id).then(function (result) {
                setOrder(result.data.order_data)
            });
        })();
    }, [])
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIET DON HANG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/order" className="btn btn-sm btn-info me-1">
                            Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-success me-1" to={"/admin/order/create"}>
                            <FaPlus />Thêm
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/" + orders.id}>
                            <FaEdit />Sửa
                        </Link>
                        <button className="btn btn-sm btn-danger ">
                            <FaTrash />Xoá
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 200 }}>Tên trường</th>
                                <th>Gía trị</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{orders.id}</td>
                            </tr>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <td>{orders.name}</td>
                            </tr>
                            <tr>
                                <th>SDT</th>
                                <td>{orders.phone}</td>
                            </tr>
                            <tr>
                                <th>Dia chi</th>
                                <td>{orders.address}</td>
                            </tr>
                            <tr>

                            </tr> <tr>
                                <th>Ghi chu</th>
                                <td>{orders.note}</td>
                            </tr>  
                            <tr>
                                <th>Trang thai</th>
                                <td>{orders.status}</td>
                            </tr>  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}



export default OrderShow; 
