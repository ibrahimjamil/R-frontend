export function appendQueryArgs(url, opts) {
	let newUrl = url;

	// append query arguments
	if (opts) {
		newUrl += '?';
		// eslint-disable-next-line no-restricted-syntax
		for (const arg of Object.keys(opts)) {
			if (newUrl.indexOf('?') !== newUrl.length - 1) newUrl += '&';

			if (Array.isArray(opts[arg])) newUrl += `${arg}=${JSON.stringify(opts[arg])}`;
			else newUrl += `${arg}=${opts[arg]}`;
		}
	}

	return newUrl;
}
