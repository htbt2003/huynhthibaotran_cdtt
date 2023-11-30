import "./contact.css";
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
    document.title = "Liên hệ"
    function ContactStore(event)
    {
        event.preventDefault();//không load lại trang
        var contact = new FormData();
        contact.append("name", name)
        contact.append("email", email)
        contact.append("content", content)
        contact.append("phone", phone)
        contact.append("status", status)
        ContactServices.create(contact)
        .then(function(result) {
            alert(result.data.message);
            navigator("/lien-he", {replace:true})
        });
    }
    return (
        <section>
            <section id="content" className="clearfix container">
                <div className="row">
                    <div id="page">
                        <div className="col-md-12 col-xs-12" id="layout-page">
                            <span className="header-contact header-page clearfix">
                                <h1>Liên Hệ</h1>
                            </span>
                            <div className="lienhe col-md-5 sm-12 col-xs-12 " id="col-left">
                                <h3>Chi tiết liên hệ </h3>
                                <hr className="line-right" />
                                <h3 className="name-company">Thời Trang Xinh </h3>
                                <h4 className="product-list">
                                    Đầm Công Sở Dáng Chuẩn - Càng Ngắm Càng Xinh
                                </h4>
                                <ul className="name_account">
                                    <li>
                                        <p>
                                            <i className="glyphicon glyphicon-map-marker" />
                                            Add:168/25 Chế Lan Viên, P.Tây Thạnh, Q.Tân Phú, Hồ Chí Minh
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="glyphicon glyphicon-envelope" />
                                            Email:{" "}
                                            <a href="mailto:Cskh@thoitrangxinh.net">
                                                Cskh@thoitrangxinh.net
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="glyphicon glyphicon-phone-alt" />
                                            Phone: 028 710 86717 - 0983766717 - 0908755717{" "}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="col-md-7 col-sm-12 col-xs-12 contactFormWrapper"
                                id="col-right "
                            >
                                <hr className="line-left" />
                                <p>
                                    Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
                                    tôi sẽ liên lạc lại với bạn sớm nhất có thể .
                                </p>
                                <form
                                    acceptCharset="UTF-8"
                                    action="/contact"
                                    className="contact-form"
                                    method="post" onSubmit={ContactStore}
                                >
                                    <input name="form_type" type="hidden" defaultValue="contact" />
                                    <input name="utf8" type="hidden" defaultValue="✓" />
                                    <div className="form-group">
                                        <label htmlFor="contactFormName" className="sr-only">
                                            Tên
                                        </label>
                                        <input
                                            required=""
                                            type="text"
                                            id="contactFormName"
                                            className="form-control input-lg"
                                            name="contact[name]"
                                            placeholder="Tên của bạn"
                                            autoCapitalize="words"
                                            defaultValue=""
                                            onChange={(e)=> setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            required=""
                                            type="email"
                                            name="contact[email]"
                                            placeholder="Email của bạn"
                                            id="contactFormEmail"
                                            className="form-control input-lg"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            defaultValue=""
                                            onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormEmail" className="sr-only">
                                            Điện thoại
                                        </label>
                                        <input
                                            required=""
                                            type="text"
                                            name="contact[email]"
                                            placeholder="Số điện thoại của bạn"
                                            id="contactFormEmail"
                                            className="form-control input-lg"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            defaultValue=""
                                            onChange={(e)=> setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactFormMessage" className="sr-only">
                                            Nội dung
                                        </label>
                                        <textarea
                                            required=""
                                            rows={6}
                                            name="contact[body]"
                                            className="form-control"
                                            placeholder="Viết bình luận"
                                            id="contactFormMessage"
                                            onChange={(e)=> setContent(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-rb"
                                        value="Gửi liên hệ"
                                    />
                                    <input
                                        id="f97cb85ddda34bf0b10e371c4c6ba201"
                                        name="g-recaptcha-response"
                                        type="hidden"
                                        defaultValue="03AL8dmw8Jxzsv9-qtLcBZIwSPxEMbUKmTXCCduRk7vOOjD1McvTmAtAly9olA3oEnl4QvTny2jAJzCKqoncYE0JCvUIrCd0oepgPaO7TB1mQGyEJljDRn1oMOaqyXa4hYkr3O6FZfFZyLGqSMLFnIgrZ3Ccf-eDRYkuiattxexxEdmXFcNWFOXtVnnJb9Bvu9gQif5HiEW79rdlpsadurnrqs3yNrli4lzAcVsIWvoWPfTo-mTxfJnoIo5gbpUhyjLWCLaWYzHKAOKIRklpHer5Mv2c7_cvDeC_CnNt1h5gCIyqweKDNQRyEa1Rz9U72p2APMcgysbKnHifpG_Pejr8-9ZK4_HQjA_5VNo5q4KMOgxDWciedlXtbXsnFzf5Lcoc5rYGkECk5R773ybul5Mo4IMKfbl4JGHz_YlfdCx8tdkCzOlZh_9DNDeeuY1wqUdpMakMpclzxRz_v8VGvoxw9OtT-WiZilT4ZukbTf5lkW9dcE1rFRjNQOgJyqP6WseljOKbgHSgIDZWbKeHpiTxS_ooeECCqBmxvq0sMD9PcURrUuCJFGYjg"
                                    />
                                </form>
                            </div>
                            <div className="content-contact content-page">
                                <p className="text-center">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9381164598913!2d106.62857073352095!3d10.816047856439988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be1b51ad80d%3A0xf175049b892c2ca6!2sShop+Th%E1%BB%9Di+Trang+Xinh!5e0!3m2!1sen!2s!4v1531032012613"
                                        width={1000}
                                        height={450}
                                        frameBorder={0}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                    />
                                </p>
                            </div>
                            <div className="content-page">
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Để cho việc mua hàng của Quý khách diễn ra thuận tiện và nhanh
                                        chóng, Thời Trang Xinh hỗ trợ các phương thức thanh toán sau đây:
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        <strong>A. Thanh toán tiền mặt khi nhận hàng (C.O.D):</strong> Đơn
                                        giản – An toàn
                                    </span>
                                    <br />
                                    <br />
                                    <span style={{ fontSize: "12pt" }}>
                                        - Tên gọi COD là viết tắt của Cash On Delivery, nghĩa là thanh
                                        toán khi nhận hàng.&nbsp;
                                    </span>
                                    <span style={{ fontSize: "12pt" }}>
                                        Với phương thức thanh toán này, quý khách sẽ trả tiền mặt cho nhân
                                        viên giao hàng ngay khi nhận được đơn hàng của mình.{" "}
                                    </span>
                                    <br />
                                    <span style={{ fontSize: "12pt" }}>
                                        - Ngay sau khi nhận được đơn đặt hàng qua facebook, website,
                                        email... CSKH Xinh sẽ xác nhận với Quý khách qua điện thoại, tiến
                                        hành thực hiện đơn hàng và giao hàng.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Thời Trang Xinh chấp nhận hình thức thanh toán khi nhận hàng (COD)
                                        cho tất cả các đơn hàng trên toàn quốc.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        - Quý khách có thể thanh toán tiền mặt trực tiếp khi mua hàng tại
                                        cửa hàng Thời Trang Xinh tại địa chỉ:
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        👉 HCM: 168/25 Chế Lan Viên, F Tây Thạnh, Tân Phú, HCM (từ 8h đến
                                        17h)
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        <strong>B. CHUYỂN KHOẢN NGÂN HÀNG</strong>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Xinh có các tài khoản của một số ngân hàng phổ biến tại Việt Nam
                                        là: Vietcombank, AGRIBANK
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Quý khách hàng có thể Chuyển khoản trực tiếp vào tài khoản ngân
                                        hàng của của Thời Trang Xinh tại các ngân hàng với nội dung:
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>Tên + SĐT đặt hàng</span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        CSKH Xinh sẽ xác nhận với Quý khách qua điện thoại, tiến hành thực
                                        hiện đơn hàng và giao hàng.
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Thông tin chi tiết các Số Tài Khoản Ngân Hàng của Thời Trang
                                        Xinh:&nbsp;
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        <strong>
                                            Ngân Hàng Vietcombank (Chi nhánh Bến Chương Dương, Quận 1)
                                        </strong>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>STK: 0071005378474</span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Chủ tài khoản: Phạm Thị Phượng
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        ---------------------------
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        <strong>AGRIBANK HỒ CHÍ MINH</strong>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>STK:1606205599654</span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Chủ tài khoản: Phạm Huy Bằng
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontSize: "12pt" }}>
                                        Ghi chú: Sau khi chuyển khoản, quý khách vui lòng thông báo cho
                                        chúng tôi việc chuyển tiền và số tài khoản của quý khách (bằng
                                        điện thoại, email, facebook …) để thuận tiện trong việc kiểm tra.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Contact;