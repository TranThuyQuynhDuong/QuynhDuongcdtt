import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderservice from "../../../services/order_service";
function OrderCreate() {
  const navigate=useNavigate();
  const [orders, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrder(result.data.orders_data);
      });
    })();
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [user_id, setUser_Id] = useState(1);
  const [status, setStatus] = useState(1);

  async function orderStore(event) {
    event.preventDefault();

    var order = new FormData();
    order.append("name", name);
    order.append("phone", phone);
    order.append("email", email);
    order.append("user_id", user_id);
    order.append("address", address);
    order.append("note", note);
    order.append("status", status);
    await orderservice.create(order).then(function (res) {
      alert(res.data.message);
      navigate('/admin/order',{replace:true});
    });
  }
  return (
    <form onSubmit={orderStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">THÊM DON HANG</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/order" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">SDT</label>
                <textarea
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <textarea
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="user_id">User_id</label>
                <select
                  type="text"
                  name="user_id"
                  value={user_id}
                  onChange={(e) => setUser_Id(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Danh mục cha</option>
                  {orders.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="note">Note</label>
                <textarea
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              

              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default OrderCreate;

