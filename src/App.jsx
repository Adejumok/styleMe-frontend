import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignupForm from './pages/SignupForm'
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
