import { Route, Routes } from 'react-router-dom';
import { Layout } from '@Layout/index';
import { Home } from '@pages/index';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
