import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './layouts/Menu.jsx'
import Home from './pages/Home.jsx'
import Contact from './Contact.jsx'
import Footer from './layouts/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
        <Footer />
     
    </BrowserRouter>
  )
}

export default App
