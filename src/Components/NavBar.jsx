const NavBar = ({menu}) => {
    return ( 
     <nav id="navBar" className="navbar navbar-dark text-white navbar-expand-lg p-0">
        <div className="container-fluid">
        <p className="brandName text-white">Gymix</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas bg-dark offcanvas-end" tabIndex="-1" id="menu" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Gymix</h2>
                <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    {menu.map((menuItem) => {
                        return (
                            <li className="nav-item" key={menuItem.id}>
                                {menuItem.page === "home" ? <a className="nav-link text-dark" href={menuItem.url}>{menuItem.page}</a> : <a className="nav-link text-white" style={{fontSize:"20px"}} href={menuItem.url}>{menuItem.page}</a>}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </div>
     </nav>
     );
}
 
export default NavBar;