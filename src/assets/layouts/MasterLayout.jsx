import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MasterLayout = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <main className="flex-grow-1 bg-dark text-light">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MasterLayout
