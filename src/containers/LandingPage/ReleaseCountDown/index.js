import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Spinner from 'src/components/Spinner';
import classes from './style.module.less';
import configurationsApi from '../../../api/configurations';
import dayjs, { parseFromSeconds } from '../../../utils/moment';

const ReleaseCountDown = (props) => {
	const [remainingTime, setRemaingTime] = useState(null);
	const [showTime, setShowTime] = useState({});

	const { isLoading, data: configurations } = useQuery('configurations', async () => {
		const res = await configurationsApi.getGlobalConfigurations();
		return res && res.data;
	});
	useEffect(() => {
		if (!isLoading && configurations && configurations.global_config) {
			const setDate = dayjs(configurations.global_config.release_date);
			const newDate = dayjs(new Date());
			let remainingSeconds = setDate.diff(newDate, 'second');
			const interval = setInterval(() => {
				remainingSeconds -= 1;
				if (remainingSeconds <= 0) {
					setRemaingTime(remainingSeconds);
					clearInterval(interval);
				} else {
					setRemaingTime(remainingSeconds);
				}
			}, 1000);
		}
	}, [configurations, isLoading]);

	useEffect(() => {
		if (remainingTime) {
			setShowTime(parseFromSeconds(remainingTime));
		} else if (remainingTime <= 0) {
			setShowTime(null);
		}
	}, [remainingTime]);

	return (
		<div>
			{
				!isLoading ?
					<>
						{
							remainingTime !== null && remainingTime <= 0 ?
								<div className={classes.countDown}>
									<div className={classes.launchText}>Launching on <span className="font-600">Jan 21st, 2022</span></div>
									<h1>SUCCESS</h1>
								</div>
								:
								<div className={classes.countDown}>
									<div className={classes.launchText}>Launching on <span className="font-600">Jan 21st, 2022</span></div>
									<div className={classes.timer}>
										<div className={classes.timeBox}>
											<div className={classes.number}>{showTime ? showTime?.days : ''}</div>
											<div className={classes.text}>Days</div>
										</div>
										<hr />
										<div className={classes.timeBox}>
											<div className={classes.number}>{showTime ? showTime?.hours : ''}</div>
											<div className={classes.text}>Hrs</div>
										</div>
										<hr />
										<div className={classes.timeBox}>
											<div className={classes.number}>{showTime ? showTime?.minutes : ''}</div>
											<div className={classes.text}>Mins</div>
										</div>
										<hr />
										<div className={classes.timeBox}>
											<div className={classes.number}>{showTime ? showTime?.seconds : ''}</div>
											<div className={classes.text}>Secs</div>
										</div>
									</div>
								</div>
						}
					</>
					: <Spinner color="white" size={50} />
			}
		</div>
	);
};

ReleaseCountDown.propTypes = {};

ReleaseCountDown.defaultProps = {};

export default ReleaseCountDown;
