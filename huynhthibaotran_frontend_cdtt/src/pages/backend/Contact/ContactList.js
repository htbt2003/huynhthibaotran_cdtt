import { Link } from 'react-router-dom';
import {FaEdit, FaRegEye, FaTrash} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ContactServices from '../../../services/ContactServices';


function ContactList() {
  const [statusdel, setStatusDel] = useState([]);
    const [contacts, setContacts] = useState([]);
    useEffect(function(){
      (async function(){
        await ContactServices.getAll()
        .then(function(result){
            setContacts(result.data.contacts)
        });
      })();
    },[statusdel])
    async function ContactDelete(id)
    {
      await ContactServices.remove(id)
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
              Danh sách liên hệ
            </strong>
          </div>
          {/* <div className="col-6 text-end">
            <Link to="/admin/contact/create" className="btn btn-success btn-sm">
              <FaPlus/> Thêm
            </Link>
          </div> */}
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{ width: 30 }} className="text-center">
                #
              </th>
              <th className="text-center">Tên người liên hệ</th>
              <th className="text-center" style={{ width:200 }}>Email</th>
              <th className="text-center" style={{ width:200 }}>Title</th>
              <th className="text-center" style={{ width:400 }}>Cotent</th>
              <th style={{ width:200 }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: 200 }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: 30 }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
          {contacts.map(function(contact, index){
            if (contact.replay_id == null)
            {
              return(
                <tr>
                <td className="text-center">
                  <input type="checkbox"/>
                </td>
                <td className="text-center">{contact.name}</td>
                <td className="text-center">{contact.email}</td>
                <td className="text-center">{contact.title}</td>
                <td className="text-center">{contact.content}</td>
                <td className="text-center">{contact.created_at}</td>
                <td className="text-center">
                          <Link className="btn btn-sm btn-info me-1" to={"/admin/contact/show/"+contact.id}>
                              <FaRegEye/>
                          </Link>
                          <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+contact.id}>
                              <FaEdit/>
                          </Link>
                          <button onClick={()=>ContactDelete(contact.id)} className="btn btn-sm btn-danger me-1">
                              <FaTrash/>
                          </button>
                          <Link className="btn btn-sm btn-primary" to={"/admin/contact/response/"+contact.id}>
                              Trả lời
                          </Link>
                      </td>
                <td className="text-center">{contact.id}</td>
              </tr>
              );
            }
            else{
              return(
                <tr>
                <td className="text-center">
                  <input type="checkbox"/>
                </td>
                <td className="text-center">{contact.name}</td>
                <td className="text-center">{contact.email}</td>
                <td className="text-center">{contact.title}</td>
                <td className="text-center">{contact.content}</td>
                <td className="text-center">{contact.created_at}</td>
                <td className="text-center">
                          <Link className="btn btn-sm btn-info me-1" to={"/admin/contact/show/"+contact.id}>
                              <FaRegEye/>
                          </Link>
                          <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+contact.id}>
                              <FaEdit/>
                          </Link>
                          <button onClick={()=>ContactDelete(contact.id)} className="btn btn-sm btn-danger me-1">
                              <FaTrash/>
                          </button>
                          
                      </td>
                <td className="text-center">{contact.id}</td>
              </tr>
              );
            }
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;