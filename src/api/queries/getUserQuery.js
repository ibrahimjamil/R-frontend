import { useQuery } from 'react-query';
import { useUser } from '../../context/UserContext';
import { TOKEN_KEY } from '../../constants';
import userApi from '../user';

const GetUserQuery = () => {
	const { setUserState } = useUser();
	const data = useQuery('user', async () => {
		const token = localStorage.getItem(TOKEN_KEY);
		const info = !!token && (await userApi.getUser(token));
		setUserState(info.data);
		return info && info.data;
	});
	return data;
};

export default GetUserQuery;
