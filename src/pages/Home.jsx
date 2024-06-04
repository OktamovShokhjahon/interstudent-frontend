import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Fragment, useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"
import {NavLink} from "react-router-dom"
import {Fade} from "react-awesome-reveal"
import axios from "axios"

import { headerItemsEn, headerItemsUz, headerItemsRu } from "../constants/headerItems"
import {carouselItemsUz, carouselItemsEn, carouselItemsRu} from "../constants/carouselItems"

import slider_2 from "../uploads/slider_02 1.png"
import slider_3 from "../uploads/slider_02.png"
import slider_1 from "../uploads/slider_04.png"
import slider_4 from "../uploads/slider_05.png"
import about_01 from "../uploads/about_01.jpg"
import about_02 from "../uploads/about_02.jpg"
import service_01 from "../uploads/service_01.jpg"
import service_02 from "../uploads/service_02.jpg"
import service_03 from "../uploads/service_03.jpg"
import parallax_04 from "../uploads/parallax_04.jpg"

const Home = () => {
    const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"))
    const [t, i18n] = useTranslation("global")
    const [carouselItems, setCarouselItems] = useState(carouselItemsUz)
    const [footerItems, setFooterItems] = useState(headerItemsUz)
    const [allStatus, setAllStatus] = useState(null)
    const [allNews, setAllNews] = useState(null)

    const main_api = "http://45.90.218.52"

    const getAllStatus = () => {
        const url = `${main_api}/api/v1/status`

        axios.get(url)
            .then((response) => {
                setAllStatus(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getAllNews = () => {
        const url = `${main_api}/api/v1/news`

        axios.get(url)
            .then((response) => {
                setAllNews(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const postStatus = () => {
        const formData = {
            title: "test",
            value: "test"
        }

        axios.post(`${main_api}/api/v1/status/create`, formData)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const postNews = () => {
        const formData = {
            title_uz: "test",
            title_en: "test",
            title_ru: "test",
            description_ru: "test",
            description_en: "test",
            description_uz: "test",
            image: "bytefy-logo.jpg",
            date: "07.04.2024"
        }

        const formData1 = new FormData();
        formData1.append('file', '../uploads/about_01.jpg');

        axios.post(`${main_api}/api/v1/upload`, formData1)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error uploading file: ', error);
          });
    }

    useEffect(() => {
        getAllStatus()
        getAllNews()
        // postNews()
        // postStatus()
    }, [])

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
            setCarouselItems(carouselItemsEn)
            i18n.changeLanguage(cookie_lang)
        } else if (cookie_lang == "ru") {
            setCarouselItems(carouselItemsRu)
            i18n.changeLanguage(cookie_lang)
        } else if (cookie_lang == "uz") {
            setCarouselItems(carouselItemsUz)
            i18n.changeLanguage(cookie_lang)
        }
    }, [cookie_lang])

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

    const sliderBtnNext = document.getElementsByClassName("control-arrow control-next")
    const sliderBtnPrev = document.getElementsByClassName("control-arrow control-prev")
    const lastSlider = document.getElementsByClassName('last-slider')
    const firstSlider = document.getElementsByClassName("first-slider")

    const autoSlide = () => {
        let c = 0

        // if (isFirstSlider && sliderBtnNext) {
        //     sliderBtnNext[0].click()
        // } else if (isLastSlider && sliderBtnPrev) {
        //     sliderBtnPrev[0].click()
        // } else {
        //     if (c%2==0 && sliderBtnNext && sliderBtnPrev) {
        //         sliderBtnNext[0].click()
        //     } else {
        //         sliderBtnPrev[0].click()
        //     }
        //     c+=1
        // }

        setInterval(() => {
            const isFirstSlider = (firstSlider[0] ? firstSlider[0].parentNode.classList.contains("selected") : "loading ...")
            const isLastSlider = (lastSlider[0] ? lastSlider[0].parentNode.classList.contains("selected") : "loading ...")

            console.log(sliderBtnNext)

            if (isFirstSlider) {
                sliderBtnNext[0].click()
            } else if (isLastSlider) {
                sliderBtnPrev[0].click()
                sliderBtnPrev[0].click()
            } else {
                if (c%2==0) {
                    sliderBtnNext[0].click()
                } else {
                    sliderBtnPrev[0].click()
                    sliderBtnPrev[0].click()
                }
            }
            c+=1
        }, 10000)

        // let c = true
        // let k = 0

        // setInterval(() => {
        //     if (c) {
        //         sliderBtnNext[0].click()
        //         k+=1
        //     } else {
        //         sliderBtnPrev[0].click()
        //         k+=1
        //     }
        //     if (k%2==0) {
        //         k=0
        //         c=false
        //     } else {
        //         c=true
        //     }
        //     console.log(c)
        // }, 10000)
    }

    if (sliderBtnNext.length != 0 && sliderBtnPrev.length != 0 && firstSlider && lastSlider) {
        autoSlide()
    }

    return (
        <div>
        <div id="top"></div>
        <Fade>
            <Carousel>
                <div className="carousel-item first-slider">
                    <img src={slider_1} style={{filter: "brightness(50%)"}}/>
                    <p className="legend slide-text" style={{backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", opacity: "1"}}>
                        <Fade cascade>
                            <h1 className="homepage-three-title" style={{opacity: 1}}>{carouselItems.first.title}</h1>
                            <h2 style={{opacity: 1}} className="slider-descr">{carouselItems.first.descr}</h2>
                            <div className="slider-content-btn " style={{opacity: 1}}>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd first-slider-btn" to="/about">{carouselItems.first.buttons.firstButton}</NavLink>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd" to="/contact">{carouselItems.first.buttons.secondButton}</NavLink>
                            </div>
                        </Fade>
                    </p>
                </div>
                <div className="carousel-item">
                    <img src={slider_2} style={{filter: "brightness(50%)"}} />
                    <p className="legend slide-text" style={{backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", opacity: "1"}}>
                        <Fade cascade>
                            <h1 className="homepage-three-title" style={{opacity: 1}}>{carouselItems.first.title}</h1>
                            <h2 style={{opacity: 1}} className="slider-descr">{carouselItems.first.descr}</h2>
                            <div className="slider-content-btn " style={{opacity: 1}}>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd first-slider-btn" to="/about">{carouselItems.first.buttons.firstButton}</NavLink>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd" to="/contact">{carouselItems.first.buttons.secondButton}</NavLink>
                            </div>
                        </Fade>
                    </p>
                </div>
                {/*<div>
                    <img src={slider_3} style={{filter: "brightness(50%)"}} />
                    <p className="legend slide-text" style={{backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", opacity: "1"}}>
                        <Fade cascade>
                            <h1 className="homepage-three-title" style={{opacity: 1}}>{carouselItems.first.title}</h1>
                            <h2 style={{opacity: 1}} className="slider-descr">{carouselItems.first.descr}</h2>
                            <div className="slider-content-btn " style={{opacity: 1}}>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd first-slider-btn" to="/about">{carouselItems.first.buttons.firstButton}</NavLink>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd" to="/contact">{carouselItems.first.buttons.secondButton}</NavLink>
                            </div>
                        </Fade>
                    </p>
                </div>*/}
                <div className="carousel-item last-slider">
                    <img src={slider_4} style={{filter: "brightness(50%)"}} />
                    <p className="legend slide-text" style={{backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", opacity: "1"}}>
                        <Fade cascade>
                            <h1 className="homepage-three-title" style={{opacity: 1}}>{carouselItems.first.title}</h1>
                            <h2 style={{opacity: 1}} className="slider-descr">{carouselItems.first.descr}</h2>
                            <div className="slider-content-btn " style={{opacity: 1}}>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd first-slider-btn" to="/about">{carouselItems.first.buttons.firstButton}</NavLink>
                                <NavLink style={{backgroundColor: "#1B9DD9", border: "1px solid #1B9DD9"}} className="button btn btn-light btn-radius btn-brd" to="/contact">{carouselItems.first.buttons.secondButton}</NavLink>
                            </div>
                        </Fade>
                    </p>
                </div>
            </Carousel>

 </Fade>
    <div id="about" className="section wb">
    <div className="container">
<Fade>

        <div className="row">
            <div className="col-md-6">
                <div className="message-box">
                    <h4>{t("about1.aboutSubtitle")}</h4>
                    <h2>{t("about1.aboutTitle")}</h2>
                    <p> {t("about1.aboutDescr")} </p>

                    <NavLink to="/about" className="btn btn-light btn-radius btn-brd grd1">{t("about1.aboutButton")}</NavLink>
                </div>
            </div>

            <div className="col-md-6">
                <div className="post-media wow fadeIn">
                    <img src={about_01} alt="" className="img-responsive img-rounded"/>
                    <a href="http://www.youtube.com/watch?v=nrJtHemSPW4" data-rel="prettyPhoto[gal]" className="playbutton"></a>
                </div>
            </div>
        </div>
</Fade>

        <hr className="hr1"/>

<Fade>
            <div className="row">
            <div className="col-md-6">
                <div className="post-media wow fadeIn">
                    <img src={about_02} alt="" className="img-responsive img-rounded"/>
                </div>
            </div>

            <div className="col-md-6">
                <div className="message-box">
                    <h4>{t("about2.aboutSubtitle")}</h4>
                    <h2>{t("about2.aboutTitle")}</h2>
                    <p> {t("about2.aboutDescr")} </p>

                    <NavLink to="/about" className="btn btn-light btn-radius btn-brd grd1">{t("about1.aboutButton")}</NavLink>
                </div>
            </div>
        </div>
</Fade>
    </div>
</div>

<Fade>
    <div className="parallax section parallax-off" data-stellar-background-ratio="0.9" style={{backgroundImage: `url(${parallax_04})`}}>
    <div className="container">
        <div className="row text-center stat-wrap">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-briefcase"></i></span>
                <p className="stat_count">{allStatus ? allStatus[0].value : ""}</p>
                <h3>{allStatus ? allStatus[0].title : ""}</h3>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-happy"></i></span>
                <p className="stat_count">{allStatus ? allStatus[1].value : ""}</p>
                <h3>{allStatus ? allStatus[1].title : ""}</h3>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-idea"></i></span>
                <p className="stat_count">{allStatus ? allStatus[2].value : ""}</p>
                <h3>{allStatus ? allStatus[2].title : ""}</h3>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12">
                <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-customer-service"></i></span>
                <p className="stat_count">{allStatus ? allStatus[3].value : ""}</p>
                <h3>{allStatus ? allStatus[3].title : ""}</h3>
            </div>
        </div>
    </div>
</div>
</Fade>

<Fade>
    <div id="services" className="parallax section lb">
        <div className="container">
            <div className="section-title text-center">
                <h3>{t("services.title")}</h3>
            </div>

            <div className="row text-center">
                {allNews ? allNews.map((news, idx) => {
                    if (idx < 3 && news.image) {
                        return (
                            <div className="col-md-4 col-sm-4 col-xs-12" key={news._id}>
                                <div className="service-widget">
                                    <div className="post-media wow fadeIn">
                                        <NavLink to={`/news/${news._id}`} style={{borderRadius: "8px"}} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></NavLink>
                                        <img src={`${main_api}/uploads/${news.image}`} alt="" className="img-responsive img-rounded"/>
                                    </div>
                                    <h3>{cookie_lang == "uz" ? news.title_uz : cookie_lang == "en" ? news.title_en : news.title_ru}</h3>
                                    <p>{cookie_lang == "uz" ? news.description_uz : cookie_lang == "en" ? news.description_en : news.description_ru}</p>
                                    <div className="card-footer" style={{padding: '10px'}}>
                                        <NavLink to={`/news/${news._id}`}>
                                            {t('about1.aboutButton')}
                                        </NavLink>
                                        <p className='card-footer-date'>
                                            {news.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }) : ""}
                {/*<div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="service-widget">
                        <div className="post-media wow fadeIn">
                            <a href="./src/uploads/features_01.jpg" style={{borderRadius: "8px"}} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                            <img src={service_01} alt="" className="img-responsive img-rounded"/>
                        </div>
                        <h3>Outstanding Landing Pages</h3>
                        <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                        <div className="card-footer" style={{padding: '10px'}}>
                            <NavLink to="#">
                                test
                            </NavLink>
                            <p className='card-footer-date'>
                                07.04.2024
                            </p>
                        </div>
                    </div>
                </div>*/}
            </div>

            {/*<div className="owl-services owl-carousel owl-theme owl-loaded owl-drag">

            <div className="owl-stage-outer">
            <div className="owl-stage" style={{transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "1560px"}}>
            <div className="owl-item active" style={{width: "360px", marginRight: "30px"}}>

            <div className="service-widget">
                    <div className="post-media wow fadeIn" style={{visibility: "visible", animationName: "fadeIn"}}>
                        <a href="uploads/service_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src={service_01} alt="" className="img-responsive img-rounded" />
                    </div>
                    <div className="service-dit">
                        <h3>Smart Swatch Editions</h3>
                        <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                    </div>
            </div>

            </div>

                <div className="owl-item active" style={{width: "360px", marginRight: "30px"}}><div className="service-widget">
                    <div className="post-media wow fadeIn" style={{visibility: "visible", animationName: "fadeIn"}}>
                        <a href="uploads/service_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src={service_02} alt="" className="img-responsive img-rounded" />
                    </div>
                    <div className="service-dit">
                        <h3>Web UI Kit Design</h3>
                        <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
                    </div>
                </div></div><div className="owl-item active" style={{width: "360px", marginRight: "30px"}}><div className="service-widget">
                    <div className="post-media wow fadeIn"  style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <a href="uploads/service_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src={service_03} alt="" className="img-responsive img-rounded" />
                    </div>
                    <div className="service-dit">
                        <h3>Mobile Optimization</h3>
                        <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis accumsan.</p>
                    </div>
                </div></div>
                 <div className="owl-item" style={{width: "360px", marginRight: "30px"}}><div className="service-widget">
                    <div className="post-media wow fadeIn"style={{visibility: 'visible', animationName: 'fadeIn'}}>
                        <a href="uploads/service_04.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                        <img src="./src/uploads/service_04.jpg" alt="" className="img-responsive img-rounded" />
                    </div>
                    <div className="service-dit">
                        <h3>Digital Design for Mac</h3>
                        <p>Praesent in neque congue sapien lobortis faucibus id eget erat. <br />Pellentesque maximus rutrum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                </div>

                </div>
                </div></div>
                </div>*/}

            <hr className="hr1" />

            <div className="text-center">
                <NavLink data-scroll="" to="/news" className="btn btn-light btn-radius btn-brd">{t("services.button")}</NavLink>
            </div>
        </div>
    </div>
</Fade>
    </div>

    )
}

export default Home
