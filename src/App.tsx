import './App.css'
import Header from "./Header.tsx"
import Footer from './Footer.tsx'
import Home from './Home.tsx'
import CreateList from './CreateList.tsx'
import Results from './Results.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy.tsx'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createlist" element={<CreateList/>} />
        <Route path="/results" element={<Results />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
