import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { TOKEN_KEY } from '../../../constants';
import queries from '../../../api/queries';
import Logo from '../../../components/Logo';
import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Login = () => {
	const router = useRouter();
	const [form] = Form.useForm();
	const [value, setValue] = useState();
	const [localError, setLocalError] = useState();
	const [toggleClass, setToggleClass] = useState(false);
	const { data: token, refetch, isError, error } = queries.loginQuery(value);

	useEffect(() => {
		try {
			const localStorageToken = localStorage.getItem(TOKEN_KEY);
			if (isError) {
				setLocalError(error?.response?.data?.message);
			}
			if (localStorageToken) router.push('/app');
			else if (token) {
				localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
				setValue(null);
				router.push('/app');
			}
		} catch {
			localStorage.removeItem(TOKEN_KEY);
		}
		// eslint-disable-next-line
	}, [token, isError, error]);

	useEffect(() => {
		refetch();
		// eslint-disable-next-line
	}, [value]);

	const onSubmit = (data) => {
		setValue(data);
	};

	const handleClick = (e) => {
		e.preventDefault();
		router.push('/signUp');
	};

	return (
		<Row className={classes.wrapper} align="middle">
			<Col span={24}>
				<Row>
					<Col span={24} align="middle">
						<Logo size={80} />
					</Col>
				</Row>
				<Row>
					<Col className={classes.title} span={24} align="middle">
						Sign in to your account
					</Col>
				</Row>
				<Row justify="center">
					<Col sm={12} md={12} lg={8}>
						<div className={classes.loginContainer}>
							{localError && localError}
							<Form form={form} layout="vertical" onFinish={onSubmit}>
								<Form.Item
									label="Email Address"
									name="email"
									hasFeedback
									className={classes.loginInputLabels}
									rules={[
										{
											required: true,
											message: 'Please input your email address',
										},
										{
											type: 'email',
											message: 'Invalid email address',
										},
										{
											max: 50,
											message: 'Should not be more than 50 characters'
										}
									]}
								>
									<Input
										className={classes.loginInputFields}
										placeholder="Enter your email address"
									/>
								</Form.Item>
								<Form.Item
									label="Password"
									name="password"
									hasFeedback
									placeholder="Enter your password"
									className={classes.loginInputLabels}
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
											pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
											message: 'One upper case, lower case, number is require',
										}
									]}
								>
									<Input.Password
										className={classes.loginInputFields}
										placeholder="Enter your password"
										type="password"
									/>
								</Form.Item>
								<Form.Item>
									<Row className={classes.rememberRoot}>
										<Col span={12} align="start">
											<Checkbox
												onChange={(e) => setToggleClass(e.target.checked)}
												className={clsx({
													[classes.rememberMeCheckbox]: !toggleClass,
													[classes.rememberMeCheckboxChecked]: toggleClass
												})}
											>
												Remember me
											</Checkbox>
										</Col>
										<Col span={12} align="end">
											<a className={classes.forgotPasswordLink}>Forgot your password?</a>
										</Col>
									</Row>
								</Form.Item>
								<Form.Item className={classes.signInButtonRoot}>
									<Button className={classes.signInButton} type="primary" block htmlType="submit">
										Sign in
									</Button>
								</Form.Item>
								<Form.Item className={classes.createAccountRoot} justify="center">
									<Row>
										<Col span={24} align="center">
											<p className={classes.createAccount}>
												Don&apos;t have an account?{' '}
												<a className={classes.createAccountLink} onClick={handleClick}>
													Create an account
												</a>
											</p>
										</Col>
									</Row>
								</Form.Item>
							</Form>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
