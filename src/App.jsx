import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import GlobalContext from './assets/contexts/GlobalContext'
import MasterLayout from './assets/layouts/MasterLayout'
import Homepage from './assets/pages/Homepage'
import VinylsPage from './assets/pages/VinylsPage'

const App = () => {

  const [vinyls, setVinyls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ vinyls, setVinyls, isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<MasterLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/vinyls" element={<VinylsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
