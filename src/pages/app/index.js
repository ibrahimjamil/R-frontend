import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch as Routes } from 'react-router-dom';
import LandlordApp from '../../containers/Landlord/App';
import TenantApp from '../../containers/Tenant/App';
import { USER_ROLES } from '../../constants';
import Head from '../../components/Head';
import Authenticator from '../../guards/Authenticator';
import { BASE_URL as LANDLORD_BASE_URL } from '../../routes/LandLordRoutes';
import { BASE_URL as TENANT_BASE_UL } from '../../routes/TenantRoutes';
import { UserProvider } from '../../context/UserContext';

const propTypes = {};

const defaultProps = {};

const HomePage = () => {
	return (
		<>
			<Head />
			<Router>
				<UserProvider>
					<Authenticator>
						{(user) => {
							return (
								<Routes>
									<Route exact key="landlord" path={LANDLORD_BASE_URL} component={LandlordApp} />
									<Route exact key="tenant" path={TENANT_BASE_UL} component={TenantApp} />
									<Redirect
										to={user.role.name === USER_ROLES.tenant ? TENANT_BASE_UL : LANDLORD_BASE_URL}
									/>
								</Routes>
							);
						}}
					</Authenticator>
				</UserProvider>
			</Router>
		</>
	);
};

HomePage.propTypes = propTypes;

HomePage.defaultProps = defaultProps;

export default HomePage;
