import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/contact" element={<Contact/>}></Route>
      <Route path= "/about" element={<About/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
