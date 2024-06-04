import {useState, useEffect} from 'react'

// packages
import axios from "axios"

const EditNewsModal = ({ id }) => {
	const url = `http://localhost:4100/news-by-id?id=${id}`

	const [news, setNews] = useState(null)

	const getData = () => {
		axios.get(url)
			.then((res) => {
				setNews(res.data)
			})
			.catch((err) => {
				alert(err)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="edit-news-modal">
			<h1 className="title">Yangilik qo'shish</h1>
				<input value={formData.titleUz} onChange={handleChange} type="text" placeholder="Yangilikning sarlavhasini o'zbek tilida kiriting" name="titleUz"/>
				<textarea value={formData.descrUz} onChange={handleChange} placeholder="Yangilikning matnini o'zbek tilida kiriting" name="descrUz"></textarea>
			
				<input value={formData.titleEn} onChange={handleChange} type="text" placeholder="Yangilikning sarlavhasini ingiliz tilida kiriting" name="titleEn"/>
				<textarea value={formData.descrEn} onChange={handleChange} placeholder="Yangilikning matnini ingiliz tilida kiriting" name="descrEn"></textarea>
			
				<input value={formData.titleRu} onChange={handleChange} type="text" placeholder="Yangilikning sarlavhasini rus tilida kiriting" name="titleRu"/>
				<textarea value={formData.descrRu} onChange={handleChange} placeholder="Yangilikning matnini rus tilida kiriting" name="descrRu"></textarea>
			
				<label>
					<input type="file" onChange={handleFileChange} />
				</label>
			
				<button className="add-news-button" onClick={() => {
					handleUpload()
					getNews()
				}}>Yangilik Qo'shish</button>
		</div>
	)
}

export default EditNewsModal