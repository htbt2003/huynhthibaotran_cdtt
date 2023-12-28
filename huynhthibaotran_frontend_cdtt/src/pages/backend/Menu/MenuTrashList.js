import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuServices from '../../../services/MenuServices';
import { IoIosSearch } from "react-icons/io";


function MenuTrashList() {
  const [statusdel, setStatusDel] = useState([]);
    const [menus, setMenus] = useState([]);
    const [categorys, setMenus1] = useState([]);
    const [brands, setMenus2] = useState([]);
    const [topics, setMenus3] = useState([]);
    const [pages, setMenus4] = useState([]);
    useEffect(function(){
      (async function(){
        const result = await MenuServices.getAll();
        setMenus(result.menus)
        })();
    },[statusdel])
    async function MenuDelete(id)
    {
      await MenuServices.remove(id)
            .then(function(result){
                alert(result.message)
                setStatusDel(id)
     });
    }
  return (
    <div>
      <div className="page-header">
        <div className='row'>
          <h1 className='ml-4 mr-3'>Mennu</h1>
          <Link to="/admin/menu/create"><button className='btn-primary' style={{ height: 30, background: "rgb(182, 109, 255)", border: "none", borderRadius: 5, color: "black" }}>Thêm mới</button></Link>
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
                      <th> Tên menu </th>
                      <th> Liên kết </th>
                      <th> vị trí </th>
                      <th> Id </th>
                    </tr>
                  </thead>
                  <tbody>
                  {menus && menus.length > 0 && menus.map(function (menu, index) {
                      return (
                        <tr className="datarow" key={index}>
                          <td className="" style={{ width: 26 }}>
                            <input style={{ width: 16 }} type="checkbox" id="checkboxID" />
                          </td>
                          <td>
                            <div className='row'>
                              <div className='col-2 pt-2'>{menu.name}</div>
                              <div className="col- 2 function_style">
                                <Link href="#" className="btn btn-success btn-sm">
                                  <i className="fa fa-toggle-on" />
                                </Link>
                                <Link to={"/admin/menu/update/"+ menu.id} className="btn btn-primary btn-sm">
                                  <i className="fa fa-edit" />
                                </Link>
                                <Link to={"/admin/menu/show/" + menu.id} className="btn btn-info btn-sm">
                                  <i className="fa fa-eye" />
                                </Link>
                                <Link href="#" className="btn btn-danger btn-sm">
                                  <i className="fa fa-trash" />
                                </Link>
                              </div>

                            </div>
                          </td>
                          <td> {menu.link} </td>
                          <td> {menu.position} </td>
                          <td> {menu.id} </td>
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

export default MenuTrashList;