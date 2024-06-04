import { useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import Cookies from "js-cookie"
import {Fade} from "react-awesome-reveal"

import about_01 from "../uploads/about_01.jpg"
import about_02 from "../uploads/about_02.jpg"

const About = () => {
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

	return (
		<div>
			<div className="banner-area banner-bg-1">
		{/*<div className="container">*/}
			<div className="row">
				<div className="col-md-12">
					<div className="banner">
						<h2>{t("aboutBanner.title")}</h2>
						<ul className="page-title-link">
							<li><a href="/">{t("aboutBanner.from")}</a></li>
							<li><a href="/about">{t("aboutBanner.to")}</a></li>
						</ul>
					</div>
				</div>
			</div>
		{/*</div>*/}
	</div>

    <div id="about" className="section wb">
        <div className="container">
            <Fade>
                <div className="row">
                <div className="col-md-6">
                    <div className="message-box">
                        <h4>{t("about1.aboutSubtitle")}</h4>
                        <h2>{t("about1.aboutTitle")}</h2>
                        <p>{t("about1.aboutDescr")}</p>

                        <a href="#services" className="btn btn-light btn-radius btn-brd grd1">{t("about1.aboutButton")}</a>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="post-media wow fadeIn">
                        <img src={about_01} alt="" className="img-responsive img-rounded" />
                    </div>
                </div>
            </div>
            </Fade>

            <hr className="hr1"/> 

            <Fade>
                <div className="row">
                <div className="col-md-6">
                    <div className="post-media wow fadeIn">
                        <img src={about_02} alt="" className="img-responsive img-rounded" />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="message-box">
                        <h4>{t("about2.aboutSubtitle")}</h4>
                        <h2>{t("about2.aboutTitle")}</h2>
                        <p>{t("about2.aboutDescr")}</p>

                        <a href="#services" className="btn btn-light btn-radius btn-brd grd1">{t("about1.aboutButton")}</a>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    </div>
		</div>
	)
}

export default About