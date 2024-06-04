// import {NavLink} from "react-router-dom"
// import {Fragment, useState, useEffect} from "react"
// import { useTranslation } from "react-i18next"
// import Cookies from "js-cookie"
// import {Fade} from "react-awesome-reveal"
// import axios from 'axios'

// import service_01 from "../uploads/service_01.jpg"
// import service_02 from "../uploads/service_02.jpg"
// import service_03 from "../uploads/service_03.jpg"

// const News = () => {
// 	const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"))
//     const [t, i18n] = useTranslation("global")
//     const [allNews, setAllNews] = useState(null)

//     const main_api = 'http://45.90.218.52'

//     const getAllNews = () => {
//         const url = `${main_api}/api/v1/news`

//         axios.get(url)
//             .then((response) => {
//                 setAllNews(response.data.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     useEffect(() => {
//         getAllNews()
//     }, [])

// 	useEffect(() => {
//         const intervalId = setInterval(() => {
//           const newValue = Cookies.get('lang');
//           if (newValue !== cookie_lang) {
//             setCookie_lang(newValue);
//             i18n.changeLanguage(newValue)
//           }
//         }, 10);

//         return () => clearInterval(intervalId);
//       }, ['lang', cookie_lang]);

// 	return (
// 		<div>
// 			<div className="banner-area banner-bg-1">
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="banner">
// 						<h2>{t("news.banner")}</h2>
// 						<ul className="page-title-link">
// 							<li><NavLink to="/">{t("news.from")}</NavLink></li>
// 							<li><NavLink to="/news">{t("news.to")}</NavLink></li>
// 						</ul>
// 					</div>
// 				</div>
// 			</div>
// 	</div>

//     <Fade>
//         <div id="features" className="section wb">
//         <div className="container">
//             <div className="section-title text-center">
//                 <h3>{t("news.title")}</h3>
//             </div>

//             <div className="row text-center">
//                 {allNews ? allNews.map((news, idx) => {
//                         return (
//                             <div className="col-md-4 col-sm-4 col-xs-12" key={news._id}>
//                                 <div className="service-widget">
//                                     <div className="post-media wow fadeIn">
//                                         <NavLink to={`/news/${news._id}`} style={{borderRadius: "8px"}} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></NavLink>
//                                         <img src={`${main_api}/uploads/${news.image}`} alt="" className="img-responsive img-rounded"/>
//                                     </div>
//                                     <h3>{cookie_lang == "uz" ? news.title_uz : cookie_lang == "en" ? news.title_en : news.title_ru}</h3>
//                                     <p>{cookie_lang == "uz" ? news.description_uz : cookie_lang == "en" ? news.description_en : news.description_ru}</p>
//                                     <div className="card-footer" style={{padding: '10px'}}>
//                                         <NavLink to={`/news/${news._id}`}>
//                                             {t('about1.aboutButton')}
//                                         </NavLink>
//                                         <p className='card-footer-date'>
//                                             {news.date}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                 }) : ""}
//                 {/*<div className="col-md-4 col-sm-4 col-xs-12">
//                     <div className="service-widget">
//                         <div className="post-media wow fadeIn">
//                             <a href="./src/uploads/features_01.jpg" style={{borderRadius: "8px"}} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
//                             <img src={service_01} alt="" className="img-responsive img-rounded"/>
//                         </div>
//                         <h3>Outstanding Landing Pages</h3>
//                         <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
//                         <div className="card-footer">
//                             <NavLink to="#">
//                                 test
//                             </NavLink>
//                             <p className='card-footer-date'>
//                                 07.04.2024
//                             </p>
//                         </div>
//                     </div>
//                 </div>*/}
//             </div>
//         </div>
//     </div>
//     </Fade>
// 		</div>
// 	)
// }

// export default News

import {NavLink} from "react-router-dom"
import {Fragment, useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"
import {Fade} from "react-awesome-reveal"
import axios from 'axios'

import service_01 from "../uploads/service_01.jpg"
import service_02 from "../uploads/service_02.jpg"
import service_03 from "../uploads/service_03.jpg"

const News = () => {
    const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang"))
    const [t, i18n] = useTranslation("global")
    const [allNews, setAllNews] = useState(null)

    const main_api = 'http://45.90.218.52'

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

    useEffect(() => {
        getAllNews()
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

    return (
        <div>
            <div className="banner-area banner-bg-1">
            <div className="row">
                <div className="col-md-12">
                    <div className="banner">
                        <h2>{t("news.banner")}</h2>
                        <ul className="page-title-link">
                            <li><NavLink to="/">{t("news.from")}</NavLink></li>
                            <li><NavLink to="/news">{t("news.to")}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>

    <Fade>
        <div id="features" className="section wb">
        <div className="container">
            <div className="section-title text-center">
                <h3>{t("news.title")}</h3>
            </div>

            <div className="row text-center">
                {allNews ? allNews.map((news, idx) => {
                        return (
                            <div className="col-md-4 col-sm-4 col-xs-12" key={news._id}>
                                <div className="service-widget">
                                    <div className="post-media wow fadeIn">
                                        <NavLink to={`/news/${news._id}`} style={{borderRadius: "8px"}} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></NavLink>
                                        <img style={{width: '350px', height: '300px'}} src={`${main_api}/uploads/${news.image}`} alt="" className="img-responsive img-rounded"/>
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
                }) : ""}
                {/*<div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="service-widget">
                        <div className="post-media wow fadeIn">
                            <a href="./src/uploads/features_01.jpg" style={{borderRadius: "8px"}} data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                            <img src={service_01} alt="" className="img-responsive img-rounded"/>
                        </div>
                        <h3>Outstanding Landing Pages</h3>
                        <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                        <div className="card-footer">
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
        </div>
    </div>
    </Fade>
        </div>
    )
}

export default News