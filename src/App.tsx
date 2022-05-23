
import { Route, Routes } from 'react-router'
import { HomeView as Home } from './views/Home/Home.views'
import { ItemDetailsView as ItemDetails } from './views/Item/ItemDetails.views'
import { Checkout } from './views/Checkout/Checkout.views'

function App() {
  return (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/details/:id" element={<ItemDetails />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
