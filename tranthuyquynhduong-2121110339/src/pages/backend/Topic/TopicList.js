import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Topicservice from "../../../services/topic_service";
import { useEffect, useState } from "react";
function TopicList() {
    const[topics,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await Topicservice.getAll().then(function(result)
            {
                setTopic(result.data.topics_data)
            });
        })();
    },[])
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TOPIC</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/topic/create">
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
                        <th>Tên Topic</th>
                        <th>Slug</th>
                        <th>mô tả</th>
                        <th>Chức năng</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {topics.map(function(Topic,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{Topic.id}</td>
                            <td>
                                {Topic.name}
                            </td>
                            <td>
                                {Topic.slug}
                            </td>
                            <td>
                               {Topic.table_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/Topic/show/"+Topic.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/Topic/update/"+Topic.id}>
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

export default TopicList;