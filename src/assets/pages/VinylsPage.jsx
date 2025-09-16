import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import axios from "axios";
import VinylCard from "../components/VinylCard";
import Pagination from "../components/Pagination";

const VinylsPage = () => {

    const { vinyls, setVinyls, setIsLoading } = useContext(GlobalContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState({
        total: 0,
        lastPage: 0,
        currentPage: 1,
        from: 0,
        to: 0
    });

    const fetchVinyls = (page) => {
        setIsLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}?page=${page}`)
            .then(resp => {
                setTimeout(() => {
                    setVinyls(resp.data.data.data);
                    setPagination({
                        total: resp.data.data.total,
                        lastPage: resp.data.data.last_page,
                        currentPage: resp.data.data.current_page,
                        from: resp.data.data.from,
                        to: resp.data.data.to
                    });
                    setIsLoading(false);
                }, 300);
            }).catch(err => console.log(err));
    }

    useEffect(() => {
        fetchVinyls(currentPage);
    }, [currentPage]);

    return (
        <>
            <div className="container">
                <div className="row gy-4 pt-5 my-5">
                    {vinyls.map(vinyl => (
                        <VinylCard key={`vin-${vinyl.id}`} vinyl={vinyl} />
                    ))}
                </div>

                {vinyls.length > 0 && <Pagination
                    pagination={pagination}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                }

            </div>
        </>
    )
}

export default VinylsPage
