import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import axios from "axios";

const Homepage = () => {

    const { vinyls, setVinyls, setIsLoading } = useContext(GlobalContext);

    const fetchVinyls = () => {
        setIsLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}`).then(resp => {
            setTimeout(() => {
                console.log(resp.data.data)
                setVinyls(resp.data.data);
                setIsLoading(false);
            }, 10);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        fetchVinyls();
    }, []);

    return (
        < div >

        </div >
    )
}

export default Homepage