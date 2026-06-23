import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './layouts/Menu.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'
import Events from './pages/Events.jsx'
import Contact from './Contact.jsx'
import Footer from './layouts/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
        <Footer />
     
    </BrowserRouter>
  )
}

export default App
