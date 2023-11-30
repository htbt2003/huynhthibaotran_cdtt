import { Link } from 'react-router-dom';
import {FaEdit, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import OrderServices from '../../../services/OrderServices';


function OrderList() {
  const [statusdel, setStatusDel] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(function(){
      (async function(){
        await OrderServices.getAll()
        .then(function(result){
            setOrders(result.data.orders)
        });
      })();
    },[statusdel])
    async function OrderDelete(id)
    {
      await OrderServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                setStatusDel(id)
     });
    }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger text-uppercase">
              Danh sách hóa đơn
            </strong>
          </div>
          {/* <div className="col-6 text-end">
            <Link to="/admin/order/create" className="btn btn-success btn-sm">
              <FaPlus/> Thêm
            </Link>
          </div> */}
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              <th className="text-center">Tên hóa đơn</th>
              <th className="text-center" style={{ width:200 }}>Điện thoại</th>
              <th className="text-center" style={{ width:200 }}>Email</th>
              <th style={{ width:300 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 160 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
          {orders.map(function(order, index){
            return(
              <tr key={index}>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">{order.name}</td>
              <td className="text-center">{order.phone}</td>
              <td className="text-center">{order.email}</td>
              <td className="text-center">{order.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+order.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/"+order.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>OrderDelete(order.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{order.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;