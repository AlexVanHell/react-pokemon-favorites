import React, { useState } from 'react';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { PokemonService } from '../../services/pokemon.service';

const SearchPage = (props) => {
	const [searchValue, setSearchValue] = useState('');
	const [pokemon, setPokemon] = useState(null);

	const handleSearchInputChange = (value) => {
		setSearchValue(value);
		setPokemon(null);
	};

	const handleSearchButtonClick = async () => {
		const pokemon = await PokemonService.getByName(searchValue);

		if (pokemon) {
			setPokemon(pokemon);
		}
	};

	return (
		<div className="SearchPage-container">
			<div className="SearchPage-searchbar-container">
				<Searchbar
					onInputChange={handleSearchInputChange}
					onButtonClick={handleSearchButtonClick}
				/>
			</div>
			{pokemon && (
				<div className="SearchPage-pokemon-container">
					<PokemonDetail pokemon={pokemon} />
				</div>
			)}
		</div>
	);
};

SearchPage.propTypes = {};

export default SearchPage;
