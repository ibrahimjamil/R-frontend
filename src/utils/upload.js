import { notification } from 'antd';
import URL from '../constants/app_config';

// import 'isomorphic-unfetch';

const { API_URL } = URL;

const upload = (file, next = (f) => f, nextErr = (f) => f) => {
	const { name, renameFile, type } = file;

	const options = {
		method: 'POST',
		body: JSON.stringify({
			fileName: renameFile || name,
			contentType: type,
		}),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};

	fetch(API_URL + '/containers/get-signed-url', options)
		.then((response) => {
			return response.status === 204 || response.statusText === 'No Content' ? {} : response.json();
		})
		.then((res) => {
			if (res.error) {
				throw res.error;
			} else {
				const optionsS3 = {
					method: 'PUT',
					body: file,
					headers: {
						'Content-Type': type,
					},
				};

				return fetch(res.singedUrl, optionsS3)
					.then((response) => {
						if (response.status === 200) {
							notification.success({
								message: 'Uploaded',
								description: 'Uploaded successfully.',
							});
							return next(res);
						}

						return nextErr(response);
					})
					.catch((err) => {
						notification.error({
							message: 'Error',
							description:
								'Please try again. Make sure you are uploading a valid file. (Err upload s3)' + err,
						});
						return nextErr(err);
					});
			}
		})
		.catch((err) => {
			notification.error({
				message: 'Error',
				description: 'Please try again. Make sure you are uploading a valid file. (Err upload api)' + err,
			});
			return nextErr(err);
		});
};

export default upload;
