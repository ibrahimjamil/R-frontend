import React from 'react';
import { Form, Input, Row, Col } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import Logo from 'src/components/Logo';
import PropTypes from 'prop-types';
import PrimaryButton from 'src/components/PrimaryButton';
import Link from 'next/link';
import classes from './style.module.less';

const propTypes = {
	user: PropTypes.object,
	handleChangeStep: PropTypes.func,
};

const SignUpDetails = (props) => {
	const { role } = props.user.role;
	const onFinish = (values) => {
		console.log('Success:', { ...values, role });
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<Row className={classes.wrapper} align="middle">
			<Col span={24}>
				<Row>
					<div
						onClick={() => {
							props.handleChangeStep(-1);
						}}
						className={classes.goBackText}
					>
						Go Back
					</div>
					<Col span={24} align="middle">
						<Logo size={80} />
					</Col>
				</Row>
				<Row className={classes.roleTitle}>
					<Col span={24} align="middle">
						<div className={classes.title} style={{ marginBottom: 0 }}>
							Hi <span>{props.user.role}</span>,<div>Welcome to Renteez</div>
						</div>
						<div style={{ padding: '5px' }} className={classes.bottomText}>
							Please fill out your account details below
						</div>
					</Col>
				</Row>
				<Row justify="center">
					<Col xs={14} sm={14} md={14} lg={10} align="middle">
						<div className={classes.signUpContainer}>
							<Form
								layout="vertical"
								autoComplete="off"
								className={classes.signUpForm}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
							>
								<Form.Item
									label="First Name"
									name="firstName"
									className={classes.signInInputLabel}
									rules={[
										{
											required: true,
											message: 'Please input your first name!',
										},
										{
											pattern: /^[0-9a-zA-Z]+$/,
											message: 'Please enter in alphanumeric format',
										},
										{
											max: 50,
											message: 'Should not be more than 50 characters',
										},
									]}
								>
									<Input placeholder="Enter your first name" />
								</Form.Item>

								<Form.Item
									label="Last Name"
									name="lastName"
									className={classes.signInInputLabel}
									rules={[
										{
											required: true,
											message: 'Please input your last name!',
										},
										{
											pattern: /^[0-9a-zA-Z]+$/,
											message: 'Please enter in alphanumeric format',
										},
										{
											max: 50,
											message: 'Should not be more than 50 characters',
										},
									]}
								>
									<Input placeholder="Enter your last name" maxLength={50} />
								</Form.Item>

								<Form.Item
									name="email"
									label="Email"
									className={classes.signInInputLabel}
									rules={[
										{
											required: true,
											message: 'Please input your email!',
										},
										{
											type: 'email',
											message: 'Invalid email address',
										},
										{
											max: 50,
											message: 'Should not be more than 50 characters',
										},
									]}
								>
									<Input placeholder="Enter your email" maxLength={50} />
								</Form.Item>

								<Form.Item
									name="phone"
									label="Phone Number"
									hasFeedback
									className={classes.signInInputLabel}
									rules={[
										{
											required: true,
											message: 'Please input your phone number!',
										},
										{
											pattern: /^[0-9+()#.\s/ext-]+$/,
											message: 'Invalid phone number',
										},
										{
											max: 15,
											message: 'not more than 10 values in phone number field',
										},
									]}
								>
									<MaskedInput
										mask="(111) 111-1111"
										placeholder="Enter your phone number"
										size="11"
										{...props}
										formatCharacters={{
											W: {
												validate(char) {
													return /\w/.test(char);
												},
												transform(char) {
													return char.toUpperCase();
												},
											},
										}}
									/>
									{/* <Input placeholder="Enter your phone number" maxLength={10} /> */}
								</Form.Item>

								<Form.Item
									label="Password"
									name="password"
									hasFeedback
									className={classes.signInInputLabel}
									rules={[
										{
											required: true,
											message: 'Please input your password!',
										},
										{
											min: 8,
											message: 'Your password must be more than 8 characters',
										},
										{
											max: 16,
											message: 'Your password not be more than 16 characters',
										},
										{
											pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
											message: 'One upper case, lower case, number is required',
										},
									]}
								>
									<Input.Password placeholder="Enter your password" maxLength={16} />
								</Form.Item>
								<Form.Item
									label="Retype Password"
									name="retypePassword"
									dependencies={['password']}
									hasFeedback
									className={classes.signInInputLabel}
									rules={[
										{
											required: true,
											message: 'Please confirm your password!',
										},
										{
											min: 8,
											message: 'Your password must be more than 8 characters',
										},
										{
											max: 16,
											message: 'Your password not be more than 16 characters',
										},
										{
											pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
											message: 'One upper case, lower case, number is required',
										},
										({ getFieldValue }) => ({
											validator(_, value) {
												if (!value || getFieldValue('password') === value) {
													return Promise.resolve();
												}
												return Promise.reject(new Error("Password don't match"));
											},
										}),
									]}
								>
									<Input.Password placeholder="Enter your password" maxLength={16} />
								</Form.Item>

								<Form.Item>
									<PrimaryButton title="Create an account" htmlType="submit" />
								</Form.Item>
							</Form>
							<Col className={classes.bottomText} xs={24}>
								Already have an account?
								<Link href="/login">
									<span>Sign in</span>
								</Link>
							</Col>
							<Col className={classes.bottomText} xs={24} style={{ marginTop: 10 }}>
								By creating an account, you accept our
								<Link href="#">
									<span>Terms of Use and Privacy Policy.</span>
								</Link>
							</Col>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

SignUpDetails.propTypes = propTypes;

export default SignUpDetails;
