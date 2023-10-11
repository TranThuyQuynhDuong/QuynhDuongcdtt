import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Orderservice from "../../../services/order_service";
import { useEffect, useState } from "react";
function OrderList() {
    const[orders,setOrder]=useState([]);
    useEffect(function(){
        (async function(){
            await Orderservice.getAll().then(function(result)
            {
                setOrder(result.data.orders_data)
            });
        })();
    },[])
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">HÓA ĐƠN</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/order/create">
                            <FaSearchPlus/>Thêm
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
                        <th>Tên người mua</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Ghi chú</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {orders.map(function(Order,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{Order.id}</td>
                            <td>
                                {Order.name}
                            </td>
                            <td>
                                {Order.phone}
                            </td>
                            <td>
                                {Order.email}
                            </td>
                            <td>
                                {Order.address}
                            </td>
                            <td>
                                {Order.note}
                            </td>
                            <td>
                               {Order.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+Order.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/"+Order.id}>
                               <FaEdit/> </Link>
                               <button className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default OrderList;