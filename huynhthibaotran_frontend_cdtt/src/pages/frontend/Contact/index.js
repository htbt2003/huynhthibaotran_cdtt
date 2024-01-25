import ContactServices from "../../../services/ContactServices"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
    const navigator = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState(1);
    const [title, setTitle] = useState();

    document.title = "Liên hệ"
    function ContactStore(event) {
        event.preventDefault();//không load lại trang
        const contact = {
            name: name,
            email: email,
            content: content,
            phone: phone,
            status: status,
            user_id: 4,
            title: 'tieu de',
            replay_id: 1,
          }
        ContactServices.create(contact)
            .then(function (result) {
                alert(result.message);
                navigator("/lien-he", { replace: true })
            });
    }
    return (
        <>
            {/*breadcrumbs area start*/}
            <div className="breadcrumbs_area">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb_content">
                            <ul>
                                <li>
                                    <a href="index.html">home</a>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right" />
                                </li>
                                <li>contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*breadcrumbs area end*/}
            {/*contact area start*/}
            <div className="contact_area">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact_message">
                            <h3>Tell us your project</h3>
                            <form onSubmit={ContactStore}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input name="name" placeholder="Name *" type="text"  onChange={(e)=> setName(e.target.value)}/>
                                    </div>                                   
                                    <div className="col-lg-6">
                                        <input name="phone" placeholder="Phone *" type="text"  onChange={(e)=> setPhone(e.target.value)}/>
                                    </div>
                                    <div className="col">
                                        <input name="email" placeholder="Email *" type="email" onChange={(e)=> setEmail(e.target.value)}/>
                                    </div>
                                    <div className="col-12">
                                        <div className="contact_textarea">
                                            <textarea
                                            onChange={(e)=> setContent(e.target.value)}
                                                placeholder="Message *"
                                                name="message"
                                                className="form-control2"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button type="submit"> Send Message </button>
                                    </div>
                                    <div className="col-12">
                                        <p className="form-messege"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="contact_message contact_info">
                            <h3>contact us</h3>
                            <p>
                                Claritas est etiam processus dynamicus, qui sequitur mutationem
                                consuetudium lectorum. Mirum est notare quam littera gothica, quam
                                nunc putamus parum claram anteposuerit litterarum formas human.
                            </p>
                            <ul>
                                <li>
                                    <i className="fa fa-fax" /> Address : No 40 Baria Sreet 133/2
                                    NewYork City
                                </li>
                                <li>
                                    <i className="fa fa-phone" /> <a href="#">Infor@roadthemes.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope-o" /> 0(1234) 567 890
                                </li>
                            </ul>
                            <h3>
                                <strong>Working hours</strong>
                            </h3>
                            <p>
                                <strong>Monday – Saturday</strong>: 08AM – 22PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*contact area end*/}
            {/*contact map start*/}
            <div className="contact_map">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb"
                            width={500}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </div>
            {/*contact map end*/}
        </>
    );
}

export default Contact;