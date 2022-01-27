import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classes from './style.module.less';

const propTypes = {
	title: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	htmlType: PropTypes.string,
};

const PrimaryButton = (props) => {
	return (
		<Button
			onClick={props.onClick}
			block
			className={classes.primaryBtn}
			type="primary"
			htmlType={props.htmlType}
			disabled={props.disabled}
		>
			{props.title}
		</Button>
	);
};
PrimaryButton.propTypes = propTypes;
export default PrimaryButton;
