import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import './PokemonCard.scss';

const PokemonCard = (props) => {
	const {
		pokemon: { name, height, weight, sprites },
		isFavorite,
	} = props;

	let ButtonContent = (
		<Button
			variant={'secondary'}
			icon={faHeart}
			onClick={() => props.onFavoriteToggle(name, true)}
		>
			Add to favorites
		</Button>
	);

	if (isFavorite) {
		ButtonContent = (
			<Button
				variant={'danger'}
				icon={faHeartBroken}
				onClick={() => props.onFavoriteToggle(name, false)}
			>
				Remove from favorites
			</Button>
		);
	}

	return (
		<div className="PokemonCard-container">
			<div className="PokemonCard-image">
				<img src={sprites.front_default} alt={name} />
			</div>
			<div className="PokemonCard-main-info">
				<h2 className="PokemonCard-name">{name}</h2>
				<div className="PokemonCard-attributes">
					<p>
						<strong>Height: </strong> {height}
					</p>
					<p>
						<strong>Weight: </strong> {weight}
					</p>
				</div>
			</div>
			<div className="PokemonCard-actions">{ButtonContent}</div>
		</div>
	);
};

PokemonCard.propTypes = {
	pokemon: PropTypes.object.isRequired,
	isFavorite: PropTypes.bool,
	onFavoriteToggle: PropTypes.func.isRequired,
};

export default PokemonCard;
