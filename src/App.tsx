import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import MainLayout from './Layout/MainLayout'

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              children={<Home />}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <MainLayout
              children={<Portfolio />}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout
              children={<Contact />}
            />
          }
        />
      </Routes>

    </>
  )
}

export default App
