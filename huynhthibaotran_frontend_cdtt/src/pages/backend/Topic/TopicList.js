import { Link } from 'react-router-dom';
import {FaEdit, FaPlus, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import TopicServices from "../../../services/TopicServices"

function TopicList() {
  const [statusdel, setStatusDel] = useState([]);
    const [topics, setTopics] = useState([]);
    useEffect (function(){
          (async function(){
            await TopicServices.getAll()
            .then(function(result){
                setTopics(result.data.topics)
            });
          })();
    },[statusdel]);
    async function TopicDelete(id)
    {
      await TopicServices.remove(id)
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
              Danh sách chủ đề
            </strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/topic/create" className="btn btn-success btn-sm">
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
              <th className="text-center">Tên chủ đề</th>
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
          {topics.map(function(topic, index){
            return(
              <tr>
              <td className="text-center">
                <input type="checkbox"/>
              </td>
              <td className="text-center">{topic.name}</td>
              <td className="text-center">{topic.slug}</td>
              <td className="text-center">{topic.created_at}</td>
              <td className="text-center">
                        <Link className="btn btn-sm btn-info me-1" to={"/admin/topic/show/" + topic.id}>
                            <FaRegEye/>
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/" + topic.id}>
                            <FaEdit/>
                        </Link>
                        <button onClick={()=>TopicDelete(topic.id)} className="btn btn-sm btn-danger">
                            <FaTrash/>
                        </button>
                        
                </td>
              <td className="text-center">{topic.id}</td>
            </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopicList;