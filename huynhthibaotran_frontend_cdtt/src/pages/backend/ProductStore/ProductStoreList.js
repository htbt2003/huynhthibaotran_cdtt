import ProductServices from '../../../services/ProductServices';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
import { IoIosSearch } from "react-icons/io";

function ProductStoreList() {
  const [statusdel, setStatusDel] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(function(){
    (async function(){
      const result = await ProductServices.getAll();
      setProducts(result.products)
    })();
  },[statusdel])
  async function ProductDelete(id)
    {
      await ProductServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                setStatusDel(id)
            });
    }
  return (
    <div>
      <div className="page-header">
        <div className='row'>
          <h1 className='ml-4 mr-3'>Sản phẩm</h1>
          <Link to="/admin/product/create"><button className='btn-primary' style={{ height: 30, background: "rgb(182, 109, 255)", border: "none", borderRadius: 5, color: "black" }}>Thêm mới</button></Link>
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
                      <th> Hình ảnh </th>
                      <th> Tên sản phẩm </th>
                      <th> Tên danh mục </th>
                      <th> Tên thương hiệu </th>
                      <th> Id </th>
                    </tr>
                  </thead>
                  <tbody>
                  {products && products.length > 0 && products.map(function (product, index) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="" style={{ width: 26 }}>
                            <input style={{ width: 16 }} type="checkbox" id="checkboxID" />
                          </td>
                          <td className="py-1">
                          <img className="img-fluid" src={urlImage + "product/" + product.image} alt="hinh"/>
                          </td>
                          <td>
                            <div className='row'>
                              <div className='col-2 pt-2'>{product.name}</div>
                              <div className="col- 2 function_style">
                                <Link href="#" className="btn btn-success btn-sm">
                                  <i className="fa fa-toggle-on" />
                                </Link>
                                <Link to={"/admin/category/update/"+ product.id} className="btn btn-primary btn-sm">
                                  <i className="fa fa-edit" />
                                </Link>
                                <Link to={"/admin/category/show/" + product.id} className="btn btn-info btn-sm">
                                  <i className="fa fa-eye" />
                                </Link>
                                <Link href="#" className="btn btn-danger btn-sm">
                                  <i className="fa fa-trash" />
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td> {product.category_id} </td>
                          <td> {product.brand_id} </td>
                          <td> {product.id} </td>
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

export default ProductStoreList;