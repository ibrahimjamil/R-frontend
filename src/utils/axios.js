const axios = require('axios');
const qs = require('qs');

const axiosInstance = axios.create();

export function configureAxiosInstance() {
	// Add a request interceptor
	axiosInstance.interceptors.request.use(
		// Do something before request is sent
		(config) => config,
		// Do something with request error
		(error) => Promise.reject(error)
	);

	// Add a response interceptor
	axiosInstance.interceptors.response.use(
		// Do something with response data
		(response) => response,
		(rejection) => {
			const modifiedResponse = { ...rejection };
			if (!modifiedResponse.response) modifiedResponse.response = { message: 'Server Unavailable' };
			else if (modifiedResponse.response.data && modifiedResponse.response.data.message) {
				modifiedResponse.response.message = modifiedResponse.response.data.message;
			} else if (modifiedResponse.response.status === 500) {
				modifiedResponse.response.message = 'Internal Server Error. Please contact support@diverst.com';
			} else if (rejection.response.status === 503) modifiedResponse.response.message = 'Server Unavailable';
			// Do something with response error
			return Promise.reject(modifiedResponse);
		}
	);

	// Format nested params correctly
	axiosInstance.interceptors.request.use((config) => {
		const modifiedConfig = config;
		modifiedConfig.paramsSerializer = (params) => {
			qs.stringify(params, {
				arrayFormat: 'brackets',
				encode: false,
			});
		};
		return config;
	});
}

export { axiosInstance as axios };
