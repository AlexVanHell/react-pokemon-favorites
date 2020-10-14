import Axios from 'axios';
import { POKEAPI_URL } from '../constants/app.constants.js';

export const PokemonService = {
	/**
	 * @param {string} name Pokemon's name
	 */
	getByName: async (name) => {
		const response = await Axios.get(`${POKEAPI_URL}/${name}`);
		return response.data;
	},
};
