import { Layout } from '@Layout/Layout';
import { Loader } from '@ui';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutePaths, ROUTES } from './Routes';

export const AppRouter = () => {
	return (
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<Routes>
				<Route path={RoutePaths.HOME} element={<Layout />}>
					{ROUTES.map(({ path, Component }) => (
						<Route
							key={path}
							path={path}
							element={
								<Suspense fallback={<Loader />}>
									<Component />
								</Suspense>
							}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
