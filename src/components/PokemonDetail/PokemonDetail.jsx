import PropTypes from 'prop-types';
import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonDetail = (props) => {
	const { pokemon } = props;

	return (
		<div className="PokemonDetail-container">
			<PokemonCard pokemon={pokemon} />
		</div>
	);
};

PokemonDetail.propTypes = {
	pokemon: PropTypes.object.isRequired,
};

export default PokemonDetail;
