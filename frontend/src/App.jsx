import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './layouts/Menu.jsx'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'
import Events from './pages/Events.jsx'
import Quality from './pages/Quality.jsx'
import Programs from './pages/Programs.jsx'
import About from './pages/About.jsx'
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
          <Route path="/quality" element={<Quality />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about/who-we-are" element={<About />} />
          <Route path="/about/goals" element={<About />} />
          <Route path="/about/structure" element={<About />} />
          <Route path="/about/members" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
        <Footer />
     
    </BrowserRouter>
  )
}

export default App
