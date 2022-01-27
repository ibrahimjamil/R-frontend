import React from 'react';
import PenIcon from 'public/images/quill-pen-fill.svg';
import SendIcon from 'public/images/send-plane-fill.svg';
import BubbleIcon from 'public/images/bubble-chart-fill.svg';
import ToolsIcon from 'public/images/tools-fill.svg';
import classes from './style.module.less';

const OurSolutions = () => {
	return (
		<div className={classes.ourSolution}>
			<h2>Our solutions</h2>
			<div className={classes.iconsBlock}>
				<div className={`${classes.icon}`}>
					<div className={classes.iconCircle}>
						<PenIcon />
					</div>
					<h3>Listing Property</h3>
				</div>
				<div className={`${classes.icon}`}>
					<div className={classes.iconCircle}><SendIcon /></div>
					<h3>Application Process</h3>
				</div>
				<div className={`${classes.icon}`}>
					<div className={classes.iconCircle}><BubbleIcon /></div>
					<h3>Background/Credit Checks</h3>
				</div>
				<div className={`${classes.icon}`}>
					<div className={classes.iconCircle}>
						<ToolsIcon />
					</div>
					<h3>Repair Request</h3>
				</div>
			</div>
		</div>
	);
};

export default OurSolutions;
