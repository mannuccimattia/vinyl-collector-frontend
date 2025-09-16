import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const MasterLayout = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <main className="flex-grow-1 bg-dark text-light">
                <Outlet />
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default MasterLayout
