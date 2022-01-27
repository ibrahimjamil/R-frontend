import React from 'react';

import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const ForgotPassword = (props) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.left}>
				<div className={classes.leftOverlay} />
				<div className={classes.leftContent}>
					<div className="ml-4 flex-1">
						<h1 className="pt-0 text-white">Forgot Password</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

ForgotPassword.propTypes = propTypes;

ForgotPassword.defaultProps = defaultProps;

export default ForgotPassword;
