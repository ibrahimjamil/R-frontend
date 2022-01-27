import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import dayjs from 'dayjs';

dayjs.locale('en');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

dayjs.tz.setDefault('Asia/Ho_Chi_Minh');

export const FORMAT_DATE = 'YYYY/MM/DD';

export const parseFromSeconds = (secondsToParse) => {
	let seconds = secondsToParse;
	const days = Math.floor(seconds / (3600 * 24));
	seconds -= days * 3600 * 24;
	const hours = Math.floor(seconds / 3600);
	seconds -= hours * 3600;
	const minutes = Math.floor(seconds / 60);
	seconds -= minutes * 60;
	return {
		days,
		hours,
		minutes,
		seconds
	};
};

export default dayjs;
