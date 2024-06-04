import {Fragment, useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"
import {NavLink} from "react-router-dom"

import TelegramIcon from "../uploads/telegram-svgrepo-com.svg"
import YoutubeIcon from "../uploads/youtube-color-svgrepo-com.svg"
import LogoRemove from "../uploads/footer-logo.png"

import { headerItemsEn, headerItemsUz, headerItemsRu } from "../constants/headerItems"

const Footer = () => {
	const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"))
    const [t, i18n] = useTranslation("global")
    const [footerItems, setFooterItems] = useState(headerItemsUz)

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

    useEffect(() => {
        if (cookie_lang == "en") {
            setFooterItems(headerItemsEn)
            i18n.changeLanguage(cookie_lang)
        } else if (cookie_lang == "ru") {
            setFooterItems(headerItemsRu)
            i18n.changeLanguage(cookie_lang)
        } else if (cookie_lang == "uz") {
            setFooterItems(headerItemsUz)
            i18n.changeLanguage(cookie_lang)
        }
    }, [cookie_lang])

	return <div>
		<footer className="footer" style={{backgroundColor: "#282E6A"}}>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="widget clearfix">
                    <div className="widget-title">
                        <img src={LogoRemove} alt="" style={{width: "250px"}}/>
                    </div>
                    <p style={{color: "white"}}>{t("footer.descr1")}</p>
                </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="widget clearfix">
                    <div className="widget-title">
                        <h3 style={{color: "white"}}>{t("footer.title1")}</h3>
                    </div>

                    <ul className="footer-links hov">
                        {footerItems.map((item, idx) => {
                            return (
                                <li key={idx}><NavLink style={{color: "white"}} to={`${item.id == "home" ? '/' : `/${item.id}`}`}>{item.title} <span className="icon icon-arrow-right2"></span></NavLink></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
            {/*<div className="col-md-4 col-sm-4 col-xs-12">
                <div className="footer-distributed widget clearfix">
                    <div className="widget-title">
                        <h3>{t("footer.title2")}</h3>
                        <p>{t("footer.descr2")}</p>
                    </div>
                    
                    <div className="footer-right">
                        <form method="get" action="#">
                            <input placeholder="Subscribe our newsletter.." name="search"/>
                            <i className="fa fa-envelope-o"></i>
                        </form>
                    </div>                        
                </div>
            </div>*/}
        </div>
        

{/*<div className="top-bar">
    <div className="container-fluid">
        <div className="row" style={{backgroundColor: "#282E6A"}}>
            <div className="col-md-6 col-sm-6">
                <div className="left-top">
                    <div className="email-box">
                        <a href="mailto:instudentuz@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>instudentuz@gmail.com</a>
                    </div>
                    <div className="phone-box">
                        <a href="tel:998996610077"><i className="fa fa-phone" aria-hidden="true"></i> +998 99 661 00 77</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-6">
                <div className="right-top">
                    <div className="social-box">
                        <ul>
                            <li><a href="https://fb.com/InterStudentUz" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                            <li><a href="https://instagram.com/interstudent.uz" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="https://t.me/interstudentuz" target="_blank"><img src={TelegramIcon}/></a></li>
                            <li><a href="https://youtube.com/@interstudentuz" target="_blank"><img src={YoutubeIcon}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>*/}
    </div>
</footer>

<div className="copyrights">
    <div className="container">
        <div className="footer-distributed">
            <div className="footer-left">                   
                <p className="footer-company-name">All Rights Reserved. &copy; 2024 <a target="_blank" href="/">Inter Student</a> Created By : 
                <a href="https://weebdevs.uz/">weebdevs.uz</a></p>
            </div>

            
        </div>
    </div>
</div>

<a href="#top" className="scroll-top">
        <i className="fa fa-angle-up"></i>
</a>
	</div>
}

export default Footer