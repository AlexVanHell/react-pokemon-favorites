import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FavoritesService } from '../../services/favorites.service';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonDetail.scss';

const PokemonDetail = (props) => {
	const [isFavorite, setFavorite] = useState(false);
	const { pokemon } = props;

	useEffect(() => {
		const isFavorite = FavoritesService.isFavorite(pokemon.name);
		setFavorite(isFavorite);

		return () => {};
	}, [pokemon]);

	const handleFavoriteClick = (name, value) => {
		if (value) {
			FavoritesService.add({ ...pokemon, name });
		} else {
			FavoritesService.removeByName(name);
		}
		setFavorite(value);
	};

	return (
		<div className="PokemonDetail-container">
			<PokemonCard
				pokemon={pokemon}
				isFavorite={isFavorite}
				onFavoriteToggle={handleFavoriteClick}
			/>
		</div>
	);
};

PokemonDetail.propTypes = {
	pokemon: PropTypes.object.isRequired,
};

export default PokemonDetail;
