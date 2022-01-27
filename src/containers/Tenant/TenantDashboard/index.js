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

const TenantDashboard = (props) => {
	const router = useRouter();

	const logout = () => {
		localStorage.clear();
		router.push('/login');
	};

	return (
		<div>
			<Row className={classes.row}>
				<Col span={24} className={classes.col}>
					<h1 className={classes.innerItems}>Tenant</h1>
					<a className={classes.innerItems} onClick={() => logout()}>Logout</a>
				</Col>
			</Row>
		</div>
	);
};

TenantDashboard.propTypes = propTypes;

TenantDashboard.defaultProps = defaultProps;

export default TenantDashboard;
