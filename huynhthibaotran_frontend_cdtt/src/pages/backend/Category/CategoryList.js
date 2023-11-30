import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import CategoryServices from "../../../services/CategoryServices"
import { urlImage } from '../../../config';

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [statusdel, setStatusDel] = useState([]);
    useEffect (function(){
          (async function(){
            await CategoryServices.getAll()
            .then(function(result){
                setCategories(result.data.categories)
            });
          })();
    },[statusdel]);
    async function CategoryDelete(id)
    {
      await CategoryServices.remove(id)
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
              Danh sách danh mục
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/category/create" className="btn btn-success btn-sm">
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
              <th className="text-center">Tên danh mục sản phẩm</th>
              <th className="text-center">Slug</th>
              <th style={{ width: 300 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 160 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 50 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
          {categories.map(function(category, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
               <img className="img-fluid" src={urlImage + "category/" + category.image} alt="hinh"/>
              </td>
              <td className="text-center">{category.name}</td>
              <td className="text-center">{category.slug}</td>
              <td className="text-center">{category.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/category/show/" + category.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/" + category.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>CategoryDelete(category.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                </td>
              <td className="text-center">{category.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryList;