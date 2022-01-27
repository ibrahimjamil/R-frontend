import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import classes from './style.module.less';

const TopBanner = () => {
	return (
		<div className={classes.topBannerwrapper}>
			<div className="banner-block">
				<Header />
				<Banner />
			</div>
		</div>
	);
};

const propTypes = {};

const defaultProps = {};

TopBanner.prototypes = propTypes;

TopBanner.defaultProps = defaultProps;

export default TopBanner;
