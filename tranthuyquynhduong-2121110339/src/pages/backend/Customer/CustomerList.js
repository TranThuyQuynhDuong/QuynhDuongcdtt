import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Userservice from "../../../services/user_service";
import { useEffect, useState } from "react";
function CustomerList() {
    const[Customers,setCustomer]=useState([]);
    useEffect(function(){
        (async function(){
            await Userservice.getAll().then(function(result)
            {
                setCustomer(result.data.users_data)
            });
        })();
    },[])
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">KHÁCH HÀNG</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/Customer/create">
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
                        <th>Mã khách hàng</th>
                        <th>Tên thành viên</th>
                        <th>Email</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>


                        
                    </tr>
                 </thead>
                 <tbody>
                    {Customers.map(function(Customer,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>

                            <td>{Customer.id}</td>
                            <td>
                                {Customer.name}
                            </td>
                            <td>
                                {Customer.email}
                            </td>
                            

                            <td>
                               {Customer.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/customer/show/1"}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/customer/update/1"}>
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

export default CustomerList;