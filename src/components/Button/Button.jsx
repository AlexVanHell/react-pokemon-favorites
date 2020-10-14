import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

const Button = (props) => {
	const { variant, children, icon, block, ...rest } = props;

	return (
		<button
			{...rest}
			className={`btn btn-${variant}${block ? ' btn-block' : ''}`}
		>
			{children}
			{icon && <FontAwesomeIcon className="btn-icon" icon={icon} />}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
	block: PropTypes.bool,
	icon: PropTypes.object,
};

export default Button;
