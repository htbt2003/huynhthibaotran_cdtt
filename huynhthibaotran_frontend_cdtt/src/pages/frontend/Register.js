import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from '../../services/UserServices';

const Register = () => {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState();
    function UserStore(event)
    {
        event.preventDefault();//không load lại trang
        // const image = document.querySelector("#image");
        var user = {
          name: name,
          email: email,
          phone: phone,
          username: username,
          password: password,
          address: address,
          roles: "user",
          status: 1,
          gender: gender,
          image: "user.png",
        };
        UserServices.register(user)
        .then(function(result) {
            // alert(result.message);
            navigator("/dang-nhap", {replace:true})
        });
    }
    return ( 
        <div>
        <div className="d-flex align-items-center auth px-0 mt-4">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3" onSubmit={UserStore}>
                <div className="form-group">
                    <input type="text"value={name} onChange={(e)=> setName(e.target.value)} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Phone" />
                  </div>
                  <div className="form-group">
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2" value={address} onChange={(e)=> setAddress(e.target.value)}>
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2" value={gender} onChange={(e)=> setGender(e.target.value)}>
                      <option value={-1}>Giới tính</option>
                      <option value={1}>Nam</option>
                      <option value={0}>Nữ</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" style={{ width: 17, margin: " -13px -20px" }}/>
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn-block btn-primary btn-lg font-weight-medium auth-form-btn" ><span>SIGN UP</span></button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/dang-nhap" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}
 
export default Register;