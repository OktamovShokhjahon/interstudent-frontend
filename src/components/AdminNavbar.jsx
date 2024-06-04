const AdminNavbar = ({setIsNews, setIsStatus, setIsContact, setIsApplication}) => {
	return (
		<div className="admin-navbar" style={{marginTop: "30px"}}>
			<ul className="admin-navbar-items">
				<li className="admin-navbar-item" onClick={(e) => {
					setIsNews(true)
					setIsStatus(false)
					setIsContact(false)
					setIsApplication(false)
				}}>
					Yangiliklar
				</li>
				<li className="admin-navbar-item" onClick={(e) => {
					setIsNews(false)
					setIsStatus(true)
					setIsApplication(false)
					setIsContact(false)
				}}>
					Statuslar
				</li>
				{/*<li className="admin-navbar-item" onClick={(e) => {
					setIsNews(false)
					setIsStatus(false)
					setIsApplication(false)
					setIsContact(true)
				}}>
					Xabarlar
				</li>*/}
				<li className="admin-navbar-item" onClick={(e) => {
					setIsNews(false)
					setIsStatus(false)
					setIsApplication(true)
					setIsContact(false)
				}}>
					Arizalar
				</li>
			</ul>
		</div>
	)
}

export default AdminNavbar