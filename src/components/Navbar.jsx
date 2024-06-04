import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { headerItemsEn, headerItemsUz, headerItemsRu } from "../constants/headerItems"
import Cookies from "js-cookie"

import LogoDefault from "../uploads/logo-default.jpg"
import TelegramIcon from "../uploads/telegram-svgrepo-com.svg"
import YoutubeIcon from "../uploads/youtube-color-svgrepo-com.svg"
import LogoRemove from "../uploads/footer-logo.png"
import EmailIcon from "../uploads/email.svg"

import "../css/animate.scss"
import "../css/bootstrap.min.scss"
import "../css/custom.scss"
import "../css/flaticon.scss"
import "../css/font-awesome.scss"
import "../css/font-awesome.min.scss"
import "../css/icomoon.scss"
import "../css/owl.carousel.scss"
import "../css/prettyPhoto.scss"
import "../css/responsive.scss"

const Navbar = () => {
    useEffect(() => {
        Cookies.set("lang", "uz", {
            expires: 30
        })
    }, [])

    const [navToggle, setNavToggle] = useState(false)
    const [showLangIcons, setShowLangIcons] = useState(false)
    const [navToggler, setNavToggler] = useState(false)

    const [t, i18n] = useTranslation("global")

    const [headerItems, setHeaderItems] = useState(headerItemsUz)

    const nav_toggle_handler = () => setNavToggle(!navToggle)
    const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang") != undefined ? Cookies.get("lang") : "Uz")

    const change_lang = () => {
        const lang = Cookies.get("lang")
    }

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
    
    const change_cookie_lang = (lang) => {
        const cookie_lang2 = Cookies.get("lang")
        if (cookie_lang2) {
            Cookies.remove("lang")
        } 
        Cookies.set("lang", lang, {
            expires: 30,
        })
        i18n.changeLanguage(lang)
        setCookie_lang(lang)
    }

    const langs = ["EN", "UZ", "RU"]

    const handle_show_icons = () => setShowLangIcons(!showLangIcons)

    useEffect(() => {
        if (cookie_lang == "en") {
            setHeaderItems(headerItemsEn)
        } else if (cookie_lang == "ru") {
            setHeaderItems(headerItemsRu)
        } else if (cookie_lang == "uz") {
            setHeaderItems(headerItemsUz)
        }
    }, [cookie_lang])

    return (
        <header className="header header_style_01" style={{padding: "0"}}>
            <div className="top-navbar">
                <div className="top-navbar-email">
                    <a href="mailto:instudentuz@gmail.com"><img src={EmailIcon} />{/*<i style={{fontSize: '20px', fill: "#fff"}} className="fa fa-envelope-o" aria-hidden="true"></i>*/}<span className="hidden-in-responsive">instudentuz@gmail.com</span></a>
                </div>
                <ul className="top-navbar-socials">
                    <li style={{marginTop: "15%"}}><a href="https://fb.com/InterStudentUz" target="_blank"><i style={{fontSize: "20px"}} className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li style={{marginTop: "15%"}}><a href="https://instagram.com/interstudent.uz" target="_blank"><i style={{fontSize: "20px"}} className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li style={{marginTop: "12%"}}><a href="https://t.me/interstudentuz" target="_blank"><img src={TelegramIcon}/></a></li>
                    <li style={{marginTop: "12%"}}><a href="https://youtube.com/@interstudentuz" target="_blank"><img src={YoutubeIcon}/></a></li>
                </ul>
                <div style={{marginTop: "0%"}} className="top-navbar-phone">
                    <a href="tel:998996610077" style={{display: 'flex', alignItems: 'center'}}><i className="fa fa-phone" style={{fontSize: '20px'}} aria-hidden="true"></i><span className="hidden-in-responsive">+998 99 661 00 77</span></a>
                </div>
            </div>
            {/*<div className="top-bar" style={{margin: 'none'}}>
                <div className="container-fluid">
                    <div className="row" style={{margin: "0"}}>
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
            <nav className="megamenu navbar navbar-default">
                <div className="custom-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    
                    <NavLink style={{marginLeft: '-2.8%', marginBottom: '0.5%'}} className="navbar-brand" id="navbar-logo" href="/"><img src={LogoDefault} style={{width: "120px"}} alt="image" /></NavLink>

                    <div id="navbar" className="navbar-collapse collapse" style={{padding: '0', marginLeft: '10%'}}>
                        <ul className="nav navbar-nav" style={{display: "flex", alignItems: "center"}}>
                            {headerItems.map((item, idx) => {
                                return (
                                    <li key={item.id} style={{display: "flex", alignItems: "center"}}>
                                        <NavLink to={item.id == "home" ? "/" : `/${item.id}`}>{item.title}</NavLink>
                                    </li>   
                                )
                            })}
                        </ul>      
                    </div>
                    {/*<div className='responsive-navbar'>
                        test
                    </div>*/}

                    <div className="navbar-header-2" style={{marginRight: "-3%"}}>
                        <button onClick={() => {
                            setNavToggler(!navToggler)
                        }}  type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" style={{borderRadius: "8px"}}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="language-icons hidden-in-responsive-navbar" style={{marginRight: "-1%"}}>
                                {langs.map((lang, idx) => {
                                    return (
                                        <div className="language-item" onClick={() => change_cookie_lang(lang.toLocaleLowerCase())}>
                                            <p>{lang}</p>
                                            <img src={`https://flagcdn.com/${lang != "EN" ? lang.toLowerCase() : "gb"}.svg`} alt="test" />
                                        </div>
                                    )
                    })}
                    </div>
                </div>
                
                {navToggler ? <div className="responsive-navbar" style={{display: "flex"}}>
                        <ul className="responsive-navbar-items" style={{display: "flex"}}>
                            {headerItems.map((item, idx) => {
                                return (
                                    <>
                                        <li key={item.id} onClick={() => setNavToggler(false)}>
                                            <NavLink to={item.id == "home" ? "/" : `/${item.id}`}>{item.title}</NavLink>
                                        </li>   
                                    </>
                                )
                            })}
                            
                            {/*<div className="language-icons">
                                 <div onClick={handle_show_icons} style={{padding: "3px 0px", cursor: 'pointer', position: "relative", marginTop: "50%"}}>
                                     {Cookies.get("lang").toUpperCase()}
                                 </div>
                                 {showLangIcons ? langs.map((lang, idx) => {
                                     return (
                                         <p key={idx} style={{cursor: 'pointer'}} onClick={() => change_cookie_lang(lang.toLowerCase())}>{lang != Cookies.get("lang").toUpperCase() ? lang : ""}</p>
                                     );
                                 }) : ""}
                             </div>*/}
                        </ul>
                        <div className="language-icons language-icons-responsive">
                                {langs.map((lang, idx) => {
                                    return (
                                        <div className="language-item" onClick={() => change_cookie_lang(lang.toLocaleLowerCase())}>
                                            <p>{lang}</p>
                                            <img src={`https://flagcdn.com/${lang != "EN" ? lang.toLowerCase() : "gb"}.svg`} alt="test" />
                                        </div>
                                    )
                                })}
                            </div>
                    </div> : ""}
            </nav>
        </header>
    )
}

export default Navbar