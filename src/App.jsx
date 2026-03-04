import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header.jsx';
import About from "./pages/About/About.jsx"
import Signup from './pages/Signup/Signup.jsx'
import Contact  from './pages/contact/Contact.jsx';
import './App.css'

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Contact/> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
