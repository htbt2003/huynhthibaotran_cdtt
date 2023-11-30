import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import PostServices from '../../../services/PostServices';
import { urlImage } from '../../../config';


function MenuList() {
  const [statusdel, setStatusDel] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(function(){
      (async function(){
        await PostServices.getAll()
        .then(function(result){
            setPosts(result.data.posts)
        });
      })();
    },[statusdel])
    async function PostDelete(id)
    {
      await PostServices.remove(id)
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
              Danh sách bài đăng
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/post/create" className="btn btn-success btn-sm">
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
                Hình
              </th>
              <th className="text-center">Tiêu đề</th>
              <th className="text-center" style={{ width:200 }}>Slug</th>
              <th className="text-center" style={{ width:100 }}>Loại</th>
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
          {posts.map(function(post, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
               <img className="img-fluid" src={urlImage + "post/" + post.image} alt={post.title}/>
              </td>
              <td className="text-center">{post.title}</td>
              <td className="text-center">{post.slug}</td>
              <td className="text-center">{post.type}</td>
              <td className="text-center">{post.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/post/show/"+post.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/post/update/"+post.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>PostDelete(post.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{post.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuList;