import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MasterLayout from './assets/layouts/MasterLayout'
import Homepage from './assets/pages/Homepage'
import VinylsPage from './assets/pages/VinylsPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MasterLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/vinyls" element={<VinylsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
