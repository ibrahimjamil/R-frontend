import LandlordDashboard from '../containers/Landlord/LandlordDashboard';

export const BASE_URL = '/app/landlord';

const routes = [
	{
		path: BASE_URL,
		title: 'Landlord dashboard',
		component: LandlordDashboard,
	},
];

export default routes;
