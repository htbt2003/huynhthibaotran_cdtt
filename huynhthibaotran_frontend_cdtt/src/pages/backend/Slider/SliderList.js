import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SliderServices from '../../../services/SliderServices';
import { urlImage } from '../../../config';


function SliderList() {
  const [statusdel, setStatusDel] = useState([]);
    const [sliders, setSliders] = useState([]);
    useEffect(function(){
      (async function(){
        await SliderServices.getAll()
        .then(function(result){
            setSliders(result.data.sliders)
        });
      })();
    },[statusdel])
    async function SliderDelete(id)
    {
      await SliderServices.remove(id)
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
              Danh sách slider
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/slider/create" className="btn btn-success btn-sm">
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
              <th className="text-center">Tên slider</th>
              <th className="text-center" style={{ width:300 }}>Link</th>
              <th className="text-center" style={{ width:100 }}>Vị trí</th>
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
          {sliders.map(function(slider, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">
               <img className="img-fluid" src={urlImage + "slider/" + slider.image} alt="hinh"/>
              </td>
              <td className="text-center">{slider.name}</td>
              <td className="text-center">{slider.link}</td>
              <td className="text-center">{slider.position}</td>
              <td className="text-center">{slider.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/slider/show/"+slider.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/"+slider.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>SliderDelete(slider.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                    </td>
              <td className="text-center">{slider.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SliderList;