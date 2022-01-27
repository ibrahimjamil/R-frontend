import TenantDashboard from '../containers/Tenant/TenantDashboard';

export const BASE_URL = '/app/tenant';

export const routes = [
	{
		path: BASE_URL,
		title: 'Lenant dashboard',
		component: TenantDashboard,
	},
];

export default routes;
