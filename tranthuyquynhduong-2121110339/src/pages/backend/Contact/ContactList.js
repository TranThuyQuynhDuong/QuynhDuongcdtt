import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import contactservice from "../../../services/contact_service";

function ContactList() {
    const [contacts, setContacts] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setContacts(result.data.contacts_data);
            });
        })();

    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Trang Liên Hệ </strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/contact/create">
                            <FaSearchPlus />Thêm
                        </Link>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>User_id</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Chủ đề</th>
                            <th>Nội dung</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>

                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(function (contact, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        {contact.id}
                                    </td>
                                    <td>
                                        {contact.user_id}
                                    </td>

                                    <td>
                                        {contact.name}
                                    </td>
                                    <td>
                                        {contact.email}
                                    </td>
                                    <td>
                                        {contact.phone}
                                    </td>
                                    <td>
                                        {contact.title}
                                    </td>
                                    <td>
                                        {contact.content}
                                    </td>
                                    <td>
                                        {contact.created_at}
                                    </td>
                                    <td>
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/contact/show/" + contact.id}>
                                            <FaEye /> </Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/" + contact.id}>
                                            <FaEdit /> </Link>
                                        <button className="btn btn-sm btn-danger"><FaTrash /></button>

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

export default ContactList;