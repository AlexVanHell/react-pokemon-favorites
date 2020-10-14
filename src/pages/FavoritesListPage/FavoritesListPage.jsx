import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { FavoritesService } from '../../services/favorites.service';
import './FavoritesListPage.scss';

const FavoritesListPage = (props) => {
	const [pokemons, setPokemons] = useState([]);

	const handleUnfavoriteClick = (name, value) => {
		FavoritesService.removeByName(name);
		setPokemons(FavoritesService.getFavorites());
	};

	useEffect(() => {
		setPokemons(FavoritesService.getFavorites());
		return () => {};
	}, []);

	return (
		<div className="FavoritesListPage-container">
			{pokemons.map((pokemon) => (
				<div key={pokemon.name} className="FavoritesListPage-item">
					<PokemonCard
						pokemon={pokemon}
						isFavorite
						onFavoriteToggle={handleUnfavoriteClick}
					/>
				</div>
			))}
		</div>
	);
};

FavoritesListPage.propTypes = {};

export default FavoritesListPage;
