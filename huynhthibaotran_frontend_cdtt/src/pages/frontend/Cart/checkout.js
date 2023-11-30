import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderServices from '../../../services/OrderServices';
import { connect } from "react-redux";
import UserServices from '../../../services/UserServices';

function Checkout({ items }) {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [user, setUser] = useState([])
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    useEffect (function(){
        (async function(){
          await UserServices.getById(6)
          .then(function(result){
              setUser(result.data.user)
          });
        })();
  },[]);
  async function OrderStore(event) {
        event.preventDefault();//không load lại trang
        var order = new FormData();
        order.append("user_id", 6)
        if(name==""){
            order.append("name", user.name)
        }
        else{
            order.append("name", name)
        }
        if(email==""){
            order.append("email", user.email)
        }
        else{
            order.append("email", email)
        }
        if(address==""){
            order.append("address", user.address)
        }
        else{
            order.append("address", address)
        }
        if(phone==""){
            order.append("phone", user.phone)
        }
        else{
            order.append("phone", phone)
        }
        order.append("note", note)
        order.append("status", 1)
        await OrderServices.create(order)
            .then(function (result) {
                navigator("/xac-nhan", { replace: true })
            });
    }
    return (
            <div className="row m-5">
                <form method='post' onSubmit={OrderStore} className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h4>Basic Information</h4>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label> Họ và tên</label>
                                        <input type="text" name="firstname" onChange={(e) => setName(e.target.value)} value={name} className="form-control" />
                                        {/* <small className="text-danger">{error.firstname}</small> */}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label> Email</label>
                                        <input type="email" name="firstname" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" />
                                        {/* <small className="text-danger">{error.firstname}</small> */}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group mb-3">
                                        <label> Địa chỉ</label>
                                        <textarea rows="3" name="address" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control"></textarea>
                                        {/* <small className="text-danger">{error.address}</small> */}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label>Điện thoại</label>
                                        <input type="text" name="city" onChange={(e) => setPhone(e.target.value)} value={phone} className="form-control" />
                                        {/* <small className="text-danger">{error.city}</small> */}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label>Ghi chú</label>
                                        <input type="text" name="state" onChange={(e) => setNote(e.target.value)} value={note} className="form-control" />
                                        {/* <small className="text-danger">{error.state}</small> */}
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group text-end">
                                        <button type="submit" className="btn btn-primary mx-1">Đặt hàng</button>
                                        {/* <button type="button" className="btn btn-primary mx-1" onClick={(e) => OrderDetailStore(e)}>Xác nhận</button>                                            */}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </form>
                <div className="col-md-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th width="50%">Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ListCart.map(function (item, index) {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{TotalPrice(item.price, item.quantity)}</td>
                                    </tr>
                                );
                            })}

                            <tr>
                                <td colSpan="2" className="text-end fw-bold">Tổng cộng</td>
                                <td colSpan="2" className="text-end fw-bold">{TotalCart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
}
const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps)(Checkout);

