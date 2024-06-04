import {NavLink} from "react-router-dom"
import {Fragment, useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"
import axios from "axios"
import {Fade} from "react-awesome-reveal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"))
    const [t, i18n] = useTranslation("global")
    const [formData, setFormData] = useState({ firstname: "", phone: "", message: "", date: "" });

    const done = () => toast("Yuborildi");
    const didntDone = () => toast("Yuborilmadi");

    const main_api = 'http://45.90.218.52'

    const currentDate = new Date();

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1; // Adding 1 to match the typical month numbering
	const day = currentDate.getDate();

    const handleSubmit = () => {
      if (formData.firstname && formData.phone && formData.message) {
      	setFormData({...formData, date: `${year}-${month}-${day}`})
      	console.log(formData)
        axios.post(`${main_api}/api/v1/contact/create`, formData)
            .then(response => {
              done()              
              done()              
              done()              
              console.log(response.data);
            })
            .catch(error => {
              didntDone()
              didntDone()
              didntDone()
            });
       } else {
        didntDone()
        didntDone()
        didntDone()
       }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

	useEffect(() => {
        const intervalId = setInterval(() => {
          const newValue = Cookies.get('lang');
          if (newValue !== cookie_lang) {
            setCookie_lang(newValue);
            i18n.changeLanguage(newValue)
          }
        }, 10);

        return () => clearInterval(intervalId);
    }, ['lang', cookie_lang]);
	return (
		<div>
			<div className="banner-area banner-bg-1">
			<div className="row">
				<div className="col-md-12">
					<div className="banner">
						<h2>{t("contract.bannerTitle")}</h2>
						<ul className="page-title-link">
							<li><a href="#">{t("contract.from")}</a></li>
							<li><a href="#">{t("contract.to")}</a></li>
						</ul>
					</div>
				</div>
			</div>
	</div>

    <div id="contact" className="section wb">
        <Fade>
        	<div className="container">
            <div className="section-title text-center">
                <h3>{t("contract.title")}</h3>
                <p className="lead">{t("contract.descr")}</p>
            </div>

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="contact_form">
                        <div id="message"></div>
                            <fieldset className="row-fluid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input  value={formData.firstName} onChange={handleChange} type="text" name="firstname" id="firstname" className="form-control" placeholder={t("contact.firstName")}/>
                                </div>
                                <ToastContainer />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input value={formData.phone} onChange={handleChange} type="text" name="phone" id="phone" className="form-control" placeholder={t("contact.phone")}/>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea value={formData.message} onChange={handleChange} className="form-control" name="message" id="comments" rows="6" placeholder={t("contact.message")}></textarea>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                                    <button onClick={handleSubmit} type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">{t("contract.button")}</button>
                                </div>
                            </fieldset>
                    </div>
                </div>
            </div>
			
			<div className="row">
				<div className="col-md-offset-1 col-sm-10 col-md-10 col-sm-offset-1 pd-add" style={{flexWrap: "wrap", display: "flex", justifyContent: "space-between"}}>
					<div className="address-item">
						<div className="address-icon">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</div>
						<h3>Email</h3>
						<p>instudentuz@gmail.com</p>
					</div>
					<div className="address-item">
						<div className="address-icon">
							<i className="icon icon-headphones"></i>
						</div>
						<h3>Call Center</h3>
						<p>+998 99 661 00 77</p>
					</div>
				</div>
			</div>
        </div>
        </Fade>
    </div>
		</div>
	)
}

export default Contact