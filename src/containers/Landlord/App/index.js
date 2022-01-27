import React from 'react';
import { Route, Switch as Routes } from 'react-router-dom';
import landlordRoutes from '../../../routes/LandLordRoutes';
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
			{landlordRoutes.map((landlordRoute, index) => {
				return (
					<Route
						user={user}
						exact
						key={index}
						path={landlordRoute.path}
						component={landlordRoute.component}
						title={landlordRoute.title}
					/>
				);
			})}
		</Routes>
	);
};

App.propTypes = propTypes;

App.defaultProps = defaultProps;

export default App;
