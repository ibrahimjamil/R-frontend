import API from '../api_base';

const BASE_PATH = '/user';
const apiCall = new API();

const userApi = {
	getUser(payload) {
		const token = {
			headers: {
				Authorization: `Bearer ${JSON.parse(payload)}`
			}
		};
		return apiCall.get(BASE_PATH + '', undefined, token);
	},
};

export default userApi;
