import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import SliderServices from "../../../services/SliderServices"

function SliderShow() {
    const navigator = useNavigate();
    const {id} = useParams();
    const [slider, setSlider] = useState([])
    useEffect (function(){
          (async function(){
            await SliderServices.getById(id)
            .then(function(result){
                setSlider(result.data.slider)
            });
          })();
    },[]);
    async function SliderDelete(id)
    {
      await SliderServices.remove(id)
            .then(function(result){
                alert(result.data.message)
                navigator("/admin/slider", {replace:true})
            });
    }
    return (
        <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-danger text-uppercase">
                Chi tiết slider
              </strong>
            </div>
            <div className="col-6 text-end">
                <Link to="/admin/slider" className="btn btn-info btn-sm me-2">
                    <FaPlus/> Về danh sách
                </Link>
                <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/" + slider.id}>
                      <FaEdit/>Sửa
                </Link>
                <button onClick={()=>SliderDelete(slider.id)} className="btn btn-sm btn-danger">
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
                      <th className="text-center">Id</th>
                      <td>{slider.id}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Tên slider</th>
                      <td>{slider.name}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Link</th>
                      <td>{slider.link}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Sắp xếp</th>
                      <td>{slider.sort_order}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Vị trí</th>
                      <td>{slider.position}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Ngày tạo</th>
                      <td>{slider.created_at}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Ngày cập nhật</th>
                      <td>{slider.updated_at}</td>
                    </tr>
                    <tr>
                      <th className="text-center">Tình trạng</th>
                      <td>{slider.status}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default SliderShow;