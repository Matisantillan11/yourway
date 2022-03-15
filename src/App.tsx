import './App.css'
import { Route, Routes } from 'react-router'
import { HomeView as Home } from './views/Home/Home.views'
import { Checkout } from './views/Checkout/Checkout.views'

function App() {
  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
