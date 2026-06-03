import './App.css'
import Header from "./Header.tsx"
import Home from './Home.tsx'
import CreateList from './CreateList.tsx'
import Results from './Results.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createlist" element={<CreateList/>} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
