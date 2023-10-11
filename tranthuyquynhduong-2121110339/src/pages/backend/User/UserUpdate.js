import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userservice from "../../../services/user_service";

function UserUpdate() {
    const { id } = useParams('id');

    const Navigate = new useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(1);
    const [role, setRole] = useState('');
    const image = document.querySelector("#image");

    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {

                const tmp = result.data.user_data;
                setName(tmp.name);
                setEmail(tmp.email);
                setPhone(tmp.phone);
                setPassword(tmp.password);
                setAddress(tmp.address);
                setRole(tmp.role);
                setUsername(tmp.username);
                setStatus(tmp.status);

            });
        })();

    }, [id]);




    async function UserUpdate(event) {
        event.preventDefault();
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("address", address);
        user.append("username", username);
        user.append("password", password);
        user.append("roles", role);
        user.append("status", status);



        if (image.files.length === 0) {
            user.append("image", "");
        } else {
            user.append("image", image.files[0]);
        }
        await userservice.update(user, id).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/user', { replace: true });
        });



    }
    return (
        <form onSubmit={UserUpdate} method="post" >
            <div className="card" >
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">CHỈNH SỬA NGƯỜI DÙNG</strong>

                        </div>

                        <div className="col-md-6 text-end" >
                            <Link to="/admin/user" className="btn btn-sm btn-info me-3">
                                Quay lại
                            </Link>
                            <button type="submit" className="btn btn-sm btn-success">Lưu</button>

                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên người dùng</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="name" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                            <label htmlFor="name">Địa chỉ</label>
                            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />

                            <label htmlFor="name">Số điện thoại</label>
                            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />

                            <label htmlFor="name">Tên tài khoản</label>
                            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />

                            <label htmlFor="name">Mật khẩu</label>
                            <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />


                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="name">Vai trò</label>
                                <input type="text" name="role" value={role} onChange={(e) => setRole(e.target.value)} className="form-control" />

                            </div>

                            <div className="md-3">
                                <label >Hình đại diện</label>
                                <input type="file" id="image" className="form-control"></input>
                            </div>
                            <div className="md-3">
                                <label >Trạng thái</label>
                                <select className="form-control" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>

                                    <option value="1"> Xuat ban</option>


                                    <option value="2"> Chua Xuat Ban</option>

                                </select>
                            </div>



                        </div>
                    </div>


                </div>

            </div>        </form>
    );
}

export default UserUpdate;