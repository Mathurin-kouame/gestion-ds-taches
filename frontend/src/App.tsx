import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute ';
import UserDashboard from './pages/user/UserDashboard';
import UserTaches from './pages/user/UserTaches';
import TacheDetails from './pages/user/TacheDetails';

const Connexion = lazy(() => import('./pages/auth/Connexion'));
const Inscription = lazy(() => import('./pages/auth/Inscription'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Taches = lazy(() => import('./pages/admin/CreeTaches'));
const GestionUsers = lazy(() => import('./pages/admin/GestionUsers'));
const CreerTache = lazy(() => import('./pages/admin/CreeTaches'));

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Suspense>
					<Routes>
						<Route path="/connexion" element={<Connexion />} />
						<Route path="/inscription" element={<Inscription />} />

						{/* admin route */}
						<Route element={<PrivateRoute allowedRoles={['admin']} />}>
							<Route path="admin/dashboard" element={<Dashboard />} />
							<Route path="admin/taches" element={<Taches />} />
							<Route path="admin/dashboard" element={<GestionUsers />} />
							<Route path="admin/Creer-Tache" element={<CreerTache />} />
						</Route>

						{/* users route */}
						<Route element={<PrivateRoute allowedRoles={['users']} />}>
							<Route path="user/dashoard" element={<UserDashboard />} />
							<Route path="user/taches" element={<UserTaches />} />
							<Route path="user/tache-datails/:id" element={<TacheDetails />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default App;
