import React from 'react';
import Head from '../components/Head';
import SignUp from '../containers/Auth/SignUp';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const HomePage = (props) => {
	// const { } = props;
	return (
		<>
			<Head title="SignUp" />
			<SignUp />
		</>
	);
};

HomePage.propTypes = propTypes;

HomePage.defaultProps = defaultProps;

export default HomePage;
