import API from '../api_base';

const BASE_PATH = '/configuration';
const apiCall = new API();

const configurationsApi = {
	getGlobalConfigurations() {
		return apiCall.get(BASE_PATH);
	},
};

export default configurationsApi;
