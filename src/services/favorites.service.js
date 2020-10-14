const localStorageKey = 'pokemons';

export const FavoritesService = {
	/**
	 * Get favorite pokemons from local storage
	 */
	getFavorites: function () {
		const storageValue = localStorage.getItem(localStorageKey);

		if (!storageValue) {
			return [];
		}

		return JSON.parse(storageValue);
	},
	/**
	 * Save favorite pokemons to local storage
	 * @param {*} pokemons
	 */
	saveToLocalStorage: function (pokemons) {
		localStorage.setItem(localStorageKey, JSON.stringify(pokemons));
	},
	/**
	 * Add new pokemon into local storage
	 * @param {*} pokemon
	 */
	add: function (pokemon) {
		const favorites = this.getFavorites();
		favorites.push(pokemon);
		this.saveToLocalStorage(favorites);
		return pokemon;
	},
	/**
	 * Remove favorite pokemon by name
	 * @param {string} name
	 */
	removeByName(name) {
		const favorites = this.getFavorites();
		const index = favorites.findIndex((pokemon) => pokemon.name === name);

		if (index > -1) {
			favorites.splice(index, 1);
		}

		this.saveToLocalStorage(favorites);
		return index;
	},
	isFavorite(name) {
		const favorites = this.getFavorites();
		return favorites.some((p) => p.name === name);
	},
};
