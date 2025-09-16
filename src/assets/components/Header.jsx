import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-black shadow-sm">
                <div className="container">
                    <div className="navbar-brand" onClick={() => navigate("/")}>
                        <div className="logo">
                            <img src="/public/imgs/logo/vinylcollector-white.png" className='img-fluid' alt="website logo" />
                        </div>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => navigate("/")}>Home</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={() => navigate("/vinyls")}>Vinyls</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
