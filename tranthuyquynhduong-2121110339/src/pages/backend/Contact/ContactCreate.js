import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import contactservice from "../../../services/contact_service";
function ContactCreate() {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll().then(function (result) {
                setContacts(result.data.contacts_data);
            });
        })();

    }, []);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const [status, setStatus] = useState(0);

    async function contactStore(event) {
        event.preventDefault();
        //dùng để upload file lên
        var contact = new FormData();

        contact.append("name", name);
        contact.append("user_id", 1);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("status", status);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("replay_id", 0);


        await contactservice.create(contact)
            .then(function (res) {
                alert(res.data.message);
                navigate('../../admin/contact', { replace: true });
            });

    }

    return (
        <form onSubmit={contactStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm liên hệ</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên Liên hệ</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
<textarea
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Điện thoại</label>
                                <textarea
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label >Title</label>
                                <textarea
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control">
                                </textarea>f
                            </div>
                            <div className="md-3">
                                <label >Content</label>
                                <textarea
                                    name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="form-control">
                                </textarea>
                            </div>
                  
        


                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default ContactCreate;
