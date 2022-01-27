import React from 'react';

import Head from '../components/Head';
import LandingPage from '../containers/LandingPage';

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
			<Head />
			<LandingPage />
		</>
	);
};

HomePage.propTypes = propTypes;

HomePage.defaultProps = defaultProps;

export default HomePage;
