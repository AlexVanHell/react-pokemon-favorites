import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import './Searchbar.scss';

export const Searchbar = (props) => {
	return (
		<div className="Searchbar-container">
			<div className="Searchbar-input-wrapper">
				<input
					type="text"
					onInput={(e) => props.onInputChange(e.currentTarget.value)}
				/>
			</div>
			<div className="Searchbar-button-wrapper">
				<Button icon={faSearch} onClick={() => props.onButtonClick}>
					Search
				</Button>
			</div>
		</div>
	);
};

Searchbar.propTypes = {
	onInputChange: PropTypes.func.isRequired,
	onButtonClick: PropTypes.func.isRequired,
};
