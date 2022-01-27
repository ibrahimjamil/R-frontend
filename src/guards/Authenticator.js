import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { TOKEN_KEY } from '../constants';
import queries from '../api/queries';
import Loading from '../components/Loading';

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {};

const Authenticator = (props) => {
	const router = useRouter();
	const [localError, setLocalError] = useState(null);
	const { isLoading, data: user, error } = queries.getUserQuery();
	useEffect(() => {
		if (!localStorage.getItem(TOKEN_KEY)) {
			router.push('/login');
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (!user?.id) setLocalError(error?.response?.data?.message);
		// eslint-disable-next-line
	}, [user]);

	if (isLoading && !localError) return <Loading loading={isLoading} />;
	return <>{user?.id ? <>{props.children(user)}</> : <Redirect to="/" />}</>;
};

Authenticator.propTypes = propTypes;

Authenticator.defaultProps = defaultProps;

export default Authenticator;
