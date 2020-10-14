import Axios from 'axios';
import { POKEAPI_URL } from '../constants/app.constants.js';

export const PokemonService = {
	/**
	 * @param {string} name Pokemon's name
	 */
	getByName: async (name) => {
		try {
			const response = await Axios.get(`${POKEAPI_URL}/pokemon/${name}`);
			return response.data;
		} catch (err) {
			return null;
		}
	},
};
