import globalAxios from 'axios';
import { axios } from '../utils/axios';
import AppConfig from '../constants/app_config';
import { appendQueryArgs } from './api_helper';

axios.defaults.baseURL = AppConfig.API_URL || '';
globalAxios.defaults.baseURL = AppConfig.API_URL || '';

class API {
	constructor() {
		this.baseURL = axios.defaults.baseURL;
	}

	get(path = '', id = undefined, payload = undefined) {
		return axios.get(appendQueryArgs(`${id ? this.baseURL + path + '/' + id : this.baseURL + path}`), payload);
	}

	create(path = '', payload) {
		return axios.post(this.baseURL + path, payload);
	}

	update(path = '', id, payload) {
		return axios.put(`${this.baseURL + path}/${id}`, payload);
	}

	delete(path = '', id, payload = undefined) {
		if (payload) return axios.delete(`${this.baseURL}/${id}`, { data: payload });
		return axios.delete(`${this.baseURL + path}/${id}`);
	}
}

export default API;
