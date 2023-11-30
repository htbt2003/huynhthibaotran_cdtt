import React from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from './actions';
import { urlImage } from '../../../config';
import { Link } from 'react-router-dom';


function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  console.log(items.Carts)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }
if (ListCart.length > 0) {
    return (
        <div className='m-5'>
        <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tên sản phẩm</th>
                        <th>Hình</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>   
                            <td><i className="btn btn-secondary" onClick={()=>DeleteCart(key)}>X</i></td>
                            <td>{item.name}</td>
                            <td><img src={urlImage + "product/" + item.image} style={{width:'100px',height:'80px'}}/></td>
                            <td>{(item.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)}</td>
                        </tr>
                        )
                    })
                         
                }
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><strong>Total Carts</strong></td>
                    <td>{TotalCart.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                </tr>
                </tbody>
               
            </table>
            </div>
        </div>
        <div className='row my-4' style={{width: 100, marginLeft:1150}}>
            <Link to="/dat-hang">
                <button className="btn btn-warning text-center">Thanh toán</button>
            </Link>
        </div>
    </div>
    );
}
else {
    return (

        <div className="card card-body py-5 text-center shadow-sm">
            <h4>Giỏ hàng của bạn trống</h4>
        </div>

    )
}
}

const mapStateToProps = state =>{
    //  console.log(state)
      return{
          items:state._todoProduct
      }
  }
   
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart);
