
import { Route, Routes } from 'react-router'
import { HomeView as Home } from './views/Home/Home.views'
import { ItemDetailsView as ItemDetails } from './views/Item/ItemDetails.views'
import { Checkout } from './views/Checkout/Checkout.views'
import useInitialState from './hooks/useInitialState'
import { AppContext } from './context/globalContext'

function App() {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details/:id" element={<ItemDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContext.Provider>
  )
}

export default App
