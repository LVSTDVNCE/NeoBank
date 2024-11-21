import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './pages/Main/Main'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
			</Route>
		</Routes>
	)
}

export default App
