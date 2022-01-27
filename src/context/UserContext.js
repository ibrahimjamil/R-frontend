import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext(undefined);

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {};

const UserProvider = ({ children }) => {
	const [userState, setUserState] = React.useState([]);
	const values = useMemo(() => {
		return { userState, setUserState };
	}, [userState, setUserState]);
	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUser = () => {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error('useProducts must be used within a ProductsProvider');
	}
	return context;
};

UserProvider.propTypes = propTypes;

UserProvider.defaultProps = defaultProps;

export { UserProvider, useUser };
