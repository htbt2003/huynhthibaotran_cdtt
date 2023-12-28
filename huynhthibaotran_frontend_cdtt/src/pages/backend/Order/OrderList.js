import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OrderServices from '../../../services/OrderServices';
import { IoIosSearch } from "react-icons/io";


function OrderList() {
  const [statusdel, setStatusDel] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(function(){
      (async function(){
        const result = await OrderServices.getAll();
        setOrders(result.orders)
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
    <div>
      <div className="page-header">
        <div className='row'>
          <h1 className='ml-4 mr-3'>Đơn hàng</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="!#" onClick={event => event.preventDefault()}>Tất cả()</Link></li>
            <li className="breadcrumb-item active" aria-current="page" >Xuất bản()</li>
            <li className="breadcrumb-item active" aria-current="page">Rác()</li>
          </ol>
        </nav>
      </div>
      <div className="page-header">
        <div className='row'>
        <div className="ml-4 mr-2">
          <select name="" className="border border-dark rounded">
            <option value="">Hành động</option>
            <option value="">Bỏ vào thùng rác</option>
          </select>
        </div>
        <div className=" p-2 mr-4 btn-secondary" style={{ height: 35, background: "#bfbfbf", border: "none", borderRadius: 2, color: "black", textAlign: "center" }}>Áp dụng</div>
        <div className="mr-2">
          <select name="" className="border border-dark rounded">
            <option value="">Hành động</option>
            <option value="">Bỏ vào thùng rác</option>
          </select>
        </div>
        <div className="mr-2">
          <select name="" className="border border-dark rounded">
            <option value="">Hành động</option>
            <option value="">Bỏ vào thùng rác</option>
          </select>
        </div>
        <div className=" p-2 mr-4 btn-secondary" style={{ height: 35, background: "#bfbfbf", border: "none", borderRadius: 2, color: "black", textAlign: "center" }}>Lọc</div>
        </div>
        <div className="search-field d-none d-md-block m-1" style={{height:50}}>
          <form className="d-flex align-items-center h-100 bg-white rounded" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="border-0 " style={{ marginTop: '11px', marginLeft: '10px' }}> <IoIosSearch size={20} color="#595959" /></i>
              </div>
              <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th><div style={{ width: 26 }}><input style={{ width: 16 }} type="checkbox" id="checkboxAll" /></div> </th>
                      <th> Họ tên khách hàng </th>
                      <th> Điện thoại </th>
                      <th> Email </th>
                      <th> Ngày đặt </th>
                      <th> Id </th>
                    </tr>
                  </thead>
                  <tbody>
                  {orders && orders.length > 0 && orders.map(function (order, index) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="" style={{ width: 26 }}>
                            <input style={{ width: 16 }} type="checkbox" id="checkboxID" />
                          </td>
                          <td>
                            <div className='row'>
                              <div className='col-2 pt-2'>{order.name}</div>
                              <div className="col- 2 function_style">
                                <Link href="#" className="btn btn-success btn-sm">
                                  <i className="fa fa-toggle-on" />
                                </Link>
                                <Link to={"/admin/category/update/"+ order.id} className="btn btn-primary btn-sm">
                                  <i className="fa fa-edit" />
                                </Link>
                                <Link to={"/admin/category/show/" + order.id} className="btn btn-info btn-sm">
                                  <i className="fa fa-eye" />
                                </Link>
                                <Link href="#" className="btn btn-danger btn-sm">
                                  <i className="fa fa-trash" />
                                </Link>
                              </div>

                            </div>

                          </td>
                          <td> {order.phone} </td>
                          <td> {order.email} </td>
                          <td> {order.created_at} </td>
                          <td> {order.id} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm justify-content-end">
          <li className="page-item disabled">
            <Link className="page-link">«</Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              »
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default OrderList;