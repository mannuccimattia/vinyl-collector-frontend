import { Outlet } from "react-router-dom"

const MasterLayout = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <header>header</header>
            <main className="flex-grow-1 bg-dark text-light">
                <Outlet />
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default MasterLayout
