import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderServices from "../../../services/OrderServices"
import { urlImage } from "../../../config";

function OrderShow() {
    const navigator = useNavigate();
    const {id} = useParams();
    const [order, setOrder] = useState([])
    const [products, setProduct] = useState([])
    let total = 0
    useEffect (function(){
          (async function(){
            await OrderServices.getById(id)
            .then(function(result){
                setOrder(result.data.order)
                setProduct(result.data.products)
            });
          })();
    },[]);
    console.log(products)
    async function OrderDelete(id)
    {
      await OrderServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                navigator("/admin/order", {replace:true})
            });
    }
    return (
        <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger text-uppercase">
                Chi tiết hóa đơn
              </strong>
            </div>
            <div className="col-6 text-end">
                <Link to="/admin/order" className="btn btn-info btn-sm me-2">
                    <FaPlus/> Về danh sách
                </Link>
                <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/" + order.id}>
                      <FaEdit/>Sửa
                </Link>
                <button onClick={()=>OrderDelete(order.id)} className="btn btn-sm btn-danger">
                    <FaTrash/>Xóa
                </button>
            </div>
          </div>
        </div>
        <div className="card-body">
            <table className="table table-border">
                <thead>
                    <tr>
                        <th className="text-center" style={{ width:200 }}>Tên trường</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <th className="text-center">Mã hóa đơn</th>
                      <td>{order.id}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Tên hóa đơn</th>
                      <td>{order.name}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Điện thoại</th>
                      <td>{order.phone}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Email</th>
                      <td>{order.email}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Đại chỉ</th>
                      <td>{order.address}</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className='m-3'>
          <h4 className="text-danger">Các sản phẩm</h4>
        <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Hình</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((item,key)=>{
                       total += item.price*item.quantity
                        return(
                            <tr key={key}>   
                            <td>{item.name}</td>
                            <td><img src={urlImage + "product/" + item.image} style={{width:'100px',height:'80px'}}/></td>
                            <td>{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </td>
                            <td>
                                    <span className="btn btn-info">{item.quantity}</span>
                            </td>
                            <td>{ (item.price*item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }</td>
                        </tr>
                        )
                    })
                         
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><strong>Tổng hóa đơn</strong></td>
                    <td>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
                </tbody>
               
            </table>
            </div>
        </div>
    </div>

    </div>
    );
}

export default OrderShow;