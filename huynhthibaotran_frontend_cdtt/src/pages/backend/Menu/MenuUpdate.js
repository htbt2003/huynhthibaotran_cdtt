import { Link, useNavigate, useParams } from 'react-router-dom';
import {FaPlus} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import MenuServices from '../../../services/MenuServices';

function MenuUpdate() {
    // const {id} = useParams();
    // const [menus, setMenus] = useState([]);
    // const navigator = useNavigate();
    // const [name, setName] = useState("");
    // const [link, setLink] = useState("");
    // const [parent_id, setParentId] = useState(0);
    // const [type, setType] = useState("");
    // const [position, setPosition] = useState("");
    // const [status, setStatus] = useState(1);

    // function MenuEdit(event)
    // {
    //     event.preventDefault();//không load lại trang
    //     var menu = new FormData();
    //     menu.append("name", name)
    //     menu.append("link", link)
    //     menu.append("parent_id", parent_id)
    //     menu.append("position", position)
    //     menu.append("type", type)
    //     menu.append("status", status)
    //     MenuServices.update(menu, id)
    //     .then(function(result) {
    //         alert(result.data.message);
    //         navigator("/admin/menu", {replace:true})
    //     });
    // }
    // useEffect(function(){
    //   (async function(){
    //     await MenuServices.getAll()
    //     .then(function(result){
    //         setMenus(result.data.menus)
    //     });
    //   })();
    // },[])
    // useEffect (function(){
    //     (async function(){
    //       await MenuServices.getById(id)
    //       .then(function(result){
    //           const tmp = result.data.menu
    //           setName(tmp.name);
    //           setLink(tmp.link);
    //           setParentId(tmp.parent_id);
    //           setType(tmp.type);
    //           setPosition(tmp.position);
    //           setStatus(tmp.status);
    //       });
    //     })();
    // },[]);
    return (
    // <form method='post' onSubmit={MenuEdit}>
    <form method='post'>

<div className="content">
  <section className="content-header my-2">
    <h1 className="d-inline">Cập nhật menu</h1>
    <div className="mt-1 text-right">
      <a className="btn btn-sm btn-primary" href="product_index.html">
        <i className="fa fa-arrow-left" /> Về danh sách
      </a>
    </div>
  </section>
  <section className="content-body my-2">
    <div className="row">
      <div className="col-md-9">
        <div className="mb-3">
          <label>
            <strong>Tên menu (*)</strong>
          </label>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            name="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>
            <strong>Liên kết (*)</strong>
          </label>
          <input
            type="text"
            placeholder="Nhập tên sản phẩm"
            name="name"
            className="form-control"
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="box-container mt-4 bg-white">
          <div className="box-header py-1 px-2 border-bottom">
            <strong>Đăng</strong>
          </div>
          <div className="box-body p-2 border-bottom">
            <select name="status" className="form-select">
              <option value={1}>Xuất bản</option>
              <option value={2}>Chưa xuất bản</option>
            </select>
          </div>
          <div className="box-footer text-end px-2 py-2 text-right">
            <button type="submit" className="btn btn-success btn-sm">
              <i className="fa fa-save" aria-hidden="true" /> Đăng
            </button>
          </div>
        </div>
        <div className="box-container mt-2 bg-white">
          <div className="box-header py-1 px-2 border-bottom">
            <strong>Cấp cha</strong>
          </div>
          <div className="box-body p-2 border-bottom">
            <select name="category_id" className="form-select">
              <option value="">None</option>
              <option value={1}>Tên danh mục</option>
            </select>
          </div>
        </div>
        <div className="box-container mt-2 bg-white">
          <div className="box-header py-1 px-2 border-bottom">
            <strong>Thứ tự</strong>
          </div>
          <div className="box-body p-2 border-bottom">
            <select name="category_id" className="form-select">
              <option value="">Chọn thứ tự</option>
              <option value={1}>Sau</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>
    </form>
    );
}

export default MenuUpdate;