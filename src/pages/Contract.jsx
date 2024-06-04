import {NavLink} from "react-router-dom"
import {Fragment, useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"
import axios from "axios"

const Contact = () => {
	const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"))
    const [t, i18n] = useTranslation("global")

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

	const [file, setFile] = useState(null);

	const handleFileChange = (event) => {
	  setFile(event.target.files[0]);
	};

	const handleUpload = () => {
	  const formData = new FormData();
	  formData.append('file', file);

	  axios.post('http://localhost:4100/create-news', formData)
	    .then(response => {
	      console.log(response.data);
	    })
	    .catch(error => {
	      console.error('Error uploading file: ', error);
	    });
	};

	const [data, setData] = useState(null);

	useEffect(() => {
	  axios.get('http://localhost:4100/get-images')
	    .then(response => {
	      setData(response.data);
	    })
	    .catch(error => {
	      console.error('Error fetching data: ', error);
	    });
	}, []);

	return (
		<div>
			<div className="banner-area banner-bg-1">
		<div className="container">
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
	</div>

    <div id="contact" className="section wb">
    	{/*<h1>File Upload</h1>
	    <input type="file" onChange={handleFileChange} />
	    <button onClick={handleUpload}>Upload</button>
	    {data.map((item, idx) => {
	    	console.log(item)
	    	return (
	    		<img key={idx} src={`http://localhost:4100/${item}`}/>
	    	)
	    })}*/}
        <div className="container">
            <div className="section-title text-center">
                <h3>{t("contract.title")}</h3>
                <p className="lead">{t("contract.descr")}</p>
            </div>

            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="contact_form">
                        <div id="message"></div>
                        <form id="contactform" className="row" action="contact.php" name="contactform" method="post">
                            <fieldset className="row-fluid">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" name="first_name" id="first_name" className="form-control" placeholder={t("contact.firstName")}/>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder={t("contact.phone")}/>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea className="form-control" name="comments" id="comments" rows="6" placeholder={t("contact.message")}></textarea>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                                    <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">Submit</button>
                                </div>
                            </fieldset>
                        </form>
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
    </div>
		</div>
	)
}

export default Contact