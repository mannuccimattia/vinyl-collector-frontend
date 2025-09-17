import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const { setIsLoading } = useContext(GlobalContext);
    const [randomVinyl, setRandomVinyl] = useState(null);

    const navigate = useNavigate();

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getRndVinyl = () => {
        setIsLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/all`).then(resp => {
            const randomIndex = getRndInteger(0, resp.data.data.length - 1);
            setRandomVinyl(resp.data.data[randomIndex]);
            setIsLoading(false);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getRndVinyl();
    }, []);

    return (
        <div className="container">
            <div className="row my-5 pt-5 justify-content-center">
                <h1 className="col-auto my-5 pt-5 display-3 fw-semibold">My Vinyl Collection</h1>
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn home-btn btn-outline-info" onClick={() => navigate("/vinyls")}>Browse All</button>
                    <button className="btn home-btn btn-outline-info" onClick={() => navigate(`/vinyls/${randomVinyl.id}`)}>Pick Random</button>
                </div>

            </div>
        </div>
    )
}

export default Homepage