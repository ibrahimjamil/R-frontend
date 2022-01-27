import React from 'react';
// import PropTypes from 'prop-types';

import Head from '../components/Head';

import Login from '../containers/Auth/Login';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const LoginPage = (props) => {
	return (
		<>
			<Head title="Login" />
			<Login />
		</>
	);
};

LoginPage.propTypes = propTypes;

LoginPage.defaultProps = defaultProps;

export default LoginPage;
