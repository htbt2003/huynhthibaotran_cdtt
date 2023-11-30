import ProductServices from '../../../services/ProductServices';
import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';

function ProductList() {
  const [statusdel, setStatusDel] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(function(){
    (async function(){
      await ProductServices.getAll()
      .then(function(result){
        setProducts(result.data.products)
      });
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
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger text-uppercase">
              Danh sách sản phẩm
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/product/create" className="btn btn-success btn-sm">
              <FaPlus/> Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              <th style={{ width: 130 }} className="text-center">
                Hinh
              </th>
              <th className="text-center">Tên sản phẩm</th>
              <th className="text-center">Slug</th>
              <th style={{ width: 160 }} className="text-center">
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
          {products.map(function(product, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
               <img className="img-fluid" src={urlImage + "product/" + product.image} alt="hinh"/>
              </td>
              <td className="text-center">{product.name}</td>
              <td className="text-center">{product.slug}</td>
              <td className="text-center">{product.created_at}</td>
              <td>
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/product/show/"+product.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/product/update/"+product.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>ProductDelete(product.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{product.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;