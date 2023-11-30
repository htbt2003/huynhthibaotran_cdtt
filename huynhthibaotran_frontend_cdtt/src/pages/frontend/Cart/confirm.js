import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderServices from '../../../services/OrderServices';
import { connect } from "react-redux";
import OrderDetailServices from "../../../services/OrderDetailServices ";
import { ClearCart } from './actions';
import { urlImage } from "../../../config";

function Confirm({ items, ClearCart }) {
    const navigator = useNavigate();
    const [order, setOrder] = useState([])
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
    useEffect(function () {
        (async function () {
            await OrderServices.getOrderByUserId(6)
                .then(function (result) {
                    setOrder(result.data.order)
                });
        })();
    }, []);
    function OrderDetailStore(event) {
        {
            ListCart.map(function (item, index) {
                var orderDetail = new FormData();
                orderDetail.append("order_id", order.id)
                orderDetail.append("product_id", item.id)
                orderDetail.append("price", item.price)
                orderDetail.append("qty", item.quantity)
                OrderDetailServices.create(orderDetail)
                    .then(function (result) {
                        navigator("/", { replace: true })
                        alert("Đặt hàng thành công");
                    });
            })
        }
        ClearCart()
    }


    return (

        <div className="row m-5">
            <div >
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Hình</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListCart.map(function (item, index) {
                            return (
                                <tr key={index}>
                                <td><img src={urlImage + "product/" + item.image} style={{width:'180px',height:'200px'}}/></td>
                                    <td>{item.name}</td>
                                    <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                    <td>{item.quantity}</td>
                                    <td>{TotalPrice(item.price, item.quantity)} </td>
                                </tr>
                            );
                        })}

                        <tr>
                            <td></td>
                            <td colSpan="2" className="text-end fw-bold">Tổng cộng</td>
                            <td colSpan="2" className="text-end fw-bold">{TotalCart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={(e) => OrderDetailStore(e)}>Xác nhận</button>

        </div>
    )
}

const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state._todoProduct
    }
}

export default connect(mapStateToProps, { ClearCart, UpdateCart })(Confirm);

