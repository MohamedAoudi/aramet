import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './layouts/Menu.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
