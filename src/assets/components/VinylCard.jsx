import { useNavigate } from "react-router-dom"

const VinylCard = ({ vinyl }) => {

    const navigate = useNavigate();

    return (
        <div className="col-12 col-md-6 col-lg-3 col-xl-2">
            <div className="card vinyl-card p-0 border-dark shadow" data-bs-theme="dark" onClick={() => navigate(`/vinyls/${vinyl.id}`)}>
                <div className="card-img-top">
                    <img src={vinyl.cover} alt={`Cover of the album ${vinyl.title} by ${vinyl.artist}`} className="img-fluid rounded" />
                </div>
                <div className="hidden w-100 h-100 rounded">
                    <div className="d-flex h-100 flex-column gap-1 justify-content-end">
                        <span>{vinyl.artist}</span>
                        <span>{vinyl.title}</span>
                        <span>{vinyl.country} {vinyl.release_year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VinylCard
