import React from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';

const propTypes = {
	size: PropTypes.number,
};

const defaultProps = {
	// className: {},
};

const Logo = (props) => {
	const { ...attrs } = props;
	const { size = 120 } = props;

	return <Image width={size} height={size} {...attrs} src="/images/sign-in-logo.svg" alt="Logo" />;
};

Logo.propTypes = propTypes;

Logo.defaultProps = defaultProps;

export default Logo;
