import { useEffect, useState } from "react";
import UserServices from '../../services/UserServices';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Account = ({User}) => {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState();
    
    function UserEdit(event)
    {
        event.preventDefault();//không load lại trang
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name", name)
        user.append("email", email)
        user.append("phone", phone)
        user.append("username", username)
        user.append("address", address)
        user.append("gender", gender)
        if(image.files.length === 0)
        {
            user.append("image", "")
        }
        else
        {
            user.append("image", image.files[0])
        }
        UserServices.updateAccount(user, User.id)
        .then(function(result) {
            alert(result.message);
            navigator("/", {replace:true})
        });
    }
    useEffect (function(){
        (async function(){
          await UserServices.getById(User.id)
          .then(function(result){
              const tmp = result.user
              setName(tmp.name);
              setEmail(tmp.email);
              setPhone(tmp.phone);
              setUsername(tmp.username);
              setAddress(tmp.address);
              setGender(tmp.gender)
          });
        })();
    },[]);
    return (
        <section className="main_content_area">
  <div className="account_dashboard">
  <h3 className="text-center">Thông tin tài khoản </h3>
    <div className="row">
      <div className="col-sm-12 col-md col-lg">
        {/* Tab panes */}
        <section className="content-body my-2">
    <form  method="post" onSubmit={UserEdit}>
    <p className="text-center">Already have an account? <a href="#">Log in instead!</a></p>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              <strong>Tên đăng nhập(*)</strong>
            </label>
            <input
              value={username} onChange={(e)=> setUsername(e.target.value)}
              type="text"
              name="username"
              className="form-control"
              placeholder="Tên đăng nhập"
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>Email(*)</strong>
            </label>
            <input
            value={email} onChange={(e)=> setEmail(e.target.value)}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          {/* <div className="mb-3">
            <label>
              <strong>Xác nhận email(*)</strong>
            </label>
            <input
              type="text"
              name="re_email"
              className="form-control"
              placeholder="Xác nhận email"
            />
          </div> */}
          <div className="mb-3">
            <label>
              <strong>Điện thoại(*)</strong>
            </label>
            <input
            value={phone} onChange={(e)=> setPhone(e.target.value)}
              type="text"
              name="phone"
              className="form-control"
              placeholder="Điện thoại"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label>
              <strong>Họ tên (*)</strong>
            </label>
            <input
            value={name} onChange={(e)=> setName(e.target.value)}
              type="text"
              name="name"
              className="form-control"
              placeholder="Họ tên"
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>Giới tính</strong>
            </label>
            <select name="gender" id="gender" className="form-select" value={gender} onChange={(e)=> setGender(e.target.value)}>
              <option>Chọn giới tinh</option>
              <option value={1}>Nam</option>
              <option value={0}>Nữ</option>
            </select>
          </div>
          <div className="mb-3">
            <label>
              <strong>Địa chỉ</strong>
            </label>
            <input
              value={address} onChange={(e)=> setAddress(e.target.value)}
              type="text"
              name="address"
              className="form-control"
              placeholder="Địa chỉ"
            />
          </div>
          <div className="mb-3">
            <label>
              <strong>Hình đại diện</strong>
            </label>
            <input type="file" id="image" className="form-control" />
          </div>
        </div>
      </div>
      <button className="btn btn-success btn-sm" type="submit">
  <i className="fa fa-save" /> Lưu [Cập nhật]
</button>

    </form>
  </section>

      </div>
    </div>
  </div>
</section>

    );
}
const mapStateToProps = state => {
    return {
      User: state._todoUser.user,
    }
  }
  
export default connect(mapStateToProps)(Account);

