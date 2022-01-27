import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Radio, Divider } from 'antd';
import Logo from 'src/components/Logo';
import PrimaryButton from 'src/components/PrimaryButton';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classes from './style.module.less';

const propTypes = {
	user: PropTypes.object,
	handleChange: PropTypes.func,
	handleChangeStep: PropTypes.func,
};

const UserRole = (props) => {
	const router = useRouter();
	const handleChange = (e) => {
		props.handleChange(e.target.name, e.target.value);
	};
	return (
		<Row align="middle">
			<Col span={24} className={classes.roleWrapper}>
				<Row
					onClick={() => router.push('/')}
					className={classes.roleGoBackText}
				>
					Go Back
				</Row>
				<Row className={classes.logoContainer}>
					<Col span={24} align="middle">
						<Logo size={80} />
					</Col>
					<Col className={classes.title} span={24} align="middle">
						Create your account
					</Col>
				</Row>
				<Row justify="center">
					<Col xs={22} sm={18} md={14} lg={10} align="middle">
						<Row gutter={[0, 16]} className={classes.roleContainer}>
							<Col xs={24}>
								<span className={classes.subTitle}>Which best describe you?</span>
							</Col>
							<Col xs={24} className={classes.radioBtnContainer}>
								<Radio.Group name="role" onChange={handleChange} value={props.user.role}>
									<Radio
										value="landlord"
										className={
											props.user.role === 'landlord'
												? `${classes.radioBtnBackground} ${classes.radioBtn}`
												: classes.radioBtn
										}
									>
										<Row>
											<Col className={classes.userRole}>I am a Landlord</Col>
											<Col className={props.user.role === 'landlord' && classes.roleDescription}>
												You have at least one rental property or unit to manage.
											</Col>
										</Row>
									</Radio>
									<Divider style={{ margin: 0 }} />
									<Radio
										value="tenant"
										className={
											props.user.role === 'tenant'
												? `${classes.radioBtnBackground} ${classes.radioBtn}`
												: classes.radioBtn
										}
									>
										<Row>
											<Col className={classes.userRole}>I am a Tenant</Col>
											<Col className={props.user.role === 'tenant' && classes.roleDescription}>
												You are renting or looking to rent a unit or property.
											</Col>
										</Row>
									</Radio>
								</Radio.Group>
							</Col>
							<Col xs={24}>
								<PrimaryButton
									onClick={() => {
										props.handleChangeStep(1);
									}}
									title="Get Started"
								/>
							</Col>
							<Col className={classes.bottomText} xs={24}>
								Already have an account?
								<Link href="/login">
									<span>Sign in</span>
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

UserRole.propTypes = propTypes;

export default UserRole;
