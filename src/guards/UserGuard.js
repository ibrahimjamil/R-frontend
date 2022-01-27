import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { USER_ROLES } from 'src/constants';
import { BASE_URL as TENANT_BASE_URL } from '../routes/TenantRoutes';
import { BASE_URL as LANDLORD_BASE_URL } from '../routes/LandLordRoutes';

const propTypes = {
	user: PropTypes.object,
	role: PropTypes.string,
	component: PropTypes.any,
};

const defaultProps = {};

const UserGuard = ({ user, role, component: Component, ...restOfProps }) => {
	// we will allow the route if user will have the given role
	const isAuthenticated = user && user.role && user.role.name === role;
	return (
		<Route
			{...restOfProps}
			render={(props) => {
				return isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect strict to={role === USER_ROLES.landlord ? TENANT_BASE_URL : LANDLORD_BASE_URL} />
				);
			}}
		/>
	);
};

UserGuard.propTypes = propTypes;

UserGuard.defaultProps = defaultProps;

export default UserGuard;
