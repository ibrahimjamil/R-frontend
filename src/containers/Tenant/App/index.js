import React from 'react';
import { Switch as Routes } from 'react-router-dom';
import { USER_ROLES } from '../../../constants';
import tenantRoutes from '../../../routes/TenantRoutes';
import UserGuard from '../../../guards/UserGuard';
import { useUser } from '../../../context/UserContext';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const App = (props) => {
	const { userState: user } = useUser();
	return (
		<Routes>
			{tenantRoutes.map((route, index) => {
				return (
					<UserGuard
						user={user}
						role={USER_ROLES.tenant}
						exact
						key={index}
						path={route.path}
						component={route.component}
						title={route.title}
					/>
				);
			})}
		</Routes>
	);
};

App.propTypes = propTypes;

App.defaultProps = defaultProps;

export default App;
