import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import Cookies from "js-cookie"

import axios from "axios"

const NewsDetail = () => {
	const { id } = useParams()
	const main_api = 'http://45.90.218.52'
	const url = `${main_api}/api/v1/news/${id}`
  const [cookie_lang, setCookie_lang] = useState(Cookies.get("lang") != undefined ? Cookies.get("lang") : "Uz")

	const [news, setNews ] = useState(null)
	const [title, setTitle] = useState(null)
	const [descr, setDescr] = useState(null)

	const getData = async () => {
		axios.get(url)
			.then((data) => {
				setNews(data.data)
			})
			.catch((err) => {
				alert(err)
			})
	}

	useEffect(() => {
		getData()
	}, [url])

	useEffect(() => {
		const lang = Cookies.get("lang")

    const intervalId = setInterval(() => {
      const newValue = Cookies.get('lang');
      if (newValue !== cookie_lang) {
        setCookie_lang(newValue);
        // console.log(newValue)
        // if (newValue == "uz") {
        // 	setTitle(news ? news.data.title_uz : "")
        // 	setDescr(news ? news.data.description_uz : "")
        // } else if (newValue == "en") {
        // 	setDescr(news ? news.data.description_en : "")
        // 	setTitle(news ? news.data.title_en : "")
        // } else if (newValue == "ru") {
        // 	setDescr(news ? news.data.description_ru : "")
        // 	setTitle(news ? news.data.title_ru : "")
        // }
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, ['lang', cookie_lang]);

	return (
		<div className="container">
			<div className="news-detail" style={{marginTop: "150px"}}>
				{news ? 
					<>	
						<img src={`${main_api}/uploads/${news.data.image}`} />
						<h1>{cookie_lang == "uz" ? news.data.title_uz : cookie_lang == "en" ? news.data.title_en : news.data.title_ru}</h1>
						<p>{cookie_lang == "uz" ? news.data.description_uz : cookie_lang == "en" ? news.data.description_en : news.data.description_ru}</p>
					</>
				: <h1>Loading</h1>}
			</div>
		</div>
	)
}

export default NewsDetail