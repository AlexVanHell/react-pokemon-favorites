import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Button from './components/Button/Button';
import FavoritesListPage from './pages/FavoritesListPage/FavoritesListPage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="App-tabs">
					<div>
						<Link to="">
							<Button variant={'primary'} block icon={faSearch}>
								Search pokemon
							</Button>
						</Link>
					</div>
					<div>
						<Link to="/favorites">
							<Button variant={'secondary'} block icon={faHeart}>
								Favorites
							</Button>
						</Link>
					</div>
				</div>
				<Switch>
					<Route path="/favorites">
						<FavoritesListPage />
					</Route>
					<Route path="/">
						<SearchPage />
					</Route>
					<Redirect from="*" to="" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
