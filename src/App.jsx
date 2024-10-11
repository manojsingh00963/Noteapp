import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Index'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default App
