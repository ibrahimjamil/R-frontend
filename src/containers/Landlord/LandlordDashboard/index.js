import React from 'react';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const LandlordDashboard = (props) => {
	const router = useRouter();

	const logout = () => {
		localStorage.clear();
		router.push('/login');
	};

	return (
		<div>
			<Row className={classes.row}>
				<Col span={24} className={classes.col}>
					<h1 className={classes.innerItems}>Landlord</h1>
					<a className={classes.innerItems} onClick={() => logout()}>Logout</a>
				</Col>
			</Row>
		</div>
	);
};

LandlordDashboard.propTypes = propTypes;

LandlordDashboard.defaultProps = defaultProps;

export default LandlordDashboard;
