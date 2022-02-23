import './App.css'
import { Route, Routes } from 'react-router'
import { HomeView as Home } from './views/Home/Home.views'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

export default App
