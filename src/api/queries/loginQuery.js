import { useQuery } from 'react-query';
import authApi from '../auth';

const LoginQuery = (value) => {
	const data = useQuery('login', async () => {
		const info = !!value && await authApi.getToken(value);
		return info && info.data;
	});
	return data;
};

export default LoginQuery;
