import API from '../api_base';

const BASE_PATH = '/auth';
const apiCall = new API();

const authApi = {
	getToken(payload) {
		return apiCall.create(BASE_PATH + '/login', payload);
	},
};

export default authApi;
