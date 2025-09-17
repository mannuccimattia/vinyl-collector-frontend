import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import GlobalContext from "../contexts/GlobalContext";


const VinylDetailPage = () => {

    const { id } = useParams();
    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const [vinyl, setVinyl] = useState([]);

    const navigate = useNavigate();

    const fetchVinyl = () => {
        setIsLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then(resp => {
                setTimeout(() => {
                    setVinyl(resp.data.data);
                    setIsLoading(false);
                }, 300);
            }).catch(err => console.log(err));
    };

    useEffect(() => {
        fetchVinyl();
    }, []);

    return (
        <div className="container">
            <div className="row gy-4 pt-5 my-5">
                {!isLoading && <>
                    <div className="col-12 col-lg-4">
                        <img src={vinyl.cover} alt={`Cover of the album ${vinyl.title} by ${vinyl.artist}`} className="img-fluid mb-2" />
                    </div>
                    <div className="col-12 col-lg-8 ps-3 d-flex flex-column">
                        <h4 className="mb-4">{vinyl.artist} - {vinyl.title}</h4>
                        <div className="d-flex">
                            <span className="vinyl-card-label">Year:</span>
                            <span>{vinyl.release_year}</span>
                        </div>
                        <div className="d-flex">
                            <span className="vinyl-card-label">Genres:</span>
                            <span>
                                {vinyl.genres && vinyl.genres.length > 0
                                    ? vinyl.genres.map(genre => genre.name).join(', ')
                                    : 'N/A'
                                }
                            </span>
                        </div>
                        <div className="d-flex">
                            <span className="vinyl-card-label">Label:</span>
                            <span>{vinyl.label ? vinyl.label.name : 'N/A'}</span>
                        </div>
                        <div className="mt-4 d-flex">
                            <span className="vinyl-card-label">Country:</span>
                            <span>{vinyl.country}</span>
                        </div>
                        <div className="d-flex">
                            <span className="vinyl-card-label">Catalog:</span>
                            <span>{vinyl.catalog_number}</span>
                        </div>
                        <div className="d-flex">
                            <span className="vinyl-card-label">Release:</span>
                            <span><a href={vinyl.release_url} target="_blank" className="text-decoration-none">
                                [{vinyl.release_num}]
                            </a></span>
                        </div>
                        <div className="mt-auto pb-2">
                            <button className="btn btn-outline-primary w-100" onClick={() => navigate("/vinyls")}>Go back ↺</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default VinylDetailPage
