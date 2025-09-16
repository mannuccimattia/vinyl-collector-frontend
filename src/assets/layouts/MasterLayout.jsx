import { Outlet } from "react-router-dom"
import { useContext } from "react"
import GlobalContext from "../contexts/GlobalContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Loader from "../components/Loader"

const MasterLayout = () => {

    const { isLoading } = useContext(GlobalContext);

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <main className="flex-grow-1 bg-dark text-light">
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </div>
    )
}

export default MasterLayout
