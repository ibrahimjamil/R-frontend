import React from 'react';
// import PropTypes from 'prop-types';

import Head from '../components/Head';

import ForgotPassword from '../containers/Auth/ForgotPassword';

const propTypes = {
	// router: PropTypes.object.isRequired,
};

const defaultProps = {
	// router: {},
};

const ForgotPasswordPage = (props) => {
	return (
		<>
			<Head title="Forgot Password" />
			<ForgotPassword />
		</>
	);
};

ForgotPasswordPage.propTypes = propTypes;

ForgotPasswordPage.defaultProps = defaultProps;

ForgotPasswordPage.Layout = ({ children }) => children;

// ForgotPasswordPage.getInitialProps = ({ store, isServer, pathname, query }) => {
// 	// store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
// 	return { custom: 'custom' }; // You can pass some custom props to the component from here
// };

export default ForgotPasswordPage;
// export default connect((state) => state)(LoginPage);
