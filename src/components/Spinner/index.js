import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PropTyoes from 'prop-types';

const propTypes = {
	color: PropTyoes.string,
	size: PropTyoes.number,
};

const defaultProps = {
	// classes: {},
};

const Spinner = (props) => {
	const { color, size } = props;
	const antIcon = <LoadingOutlined style={{ fontSize: size && size }} spin />;
	return <Spin style={{ color: color || '' }} indicator={antIcon} />;
};

Spinner.propTypes = propTypes;

Spinner.defaultProps = defaultProps;

export default Spinner;
