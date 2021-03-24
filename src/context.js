import React, { useState, useEffect } from 'react';
import data from './data.json';

const BotContext = React.createContext();

const BotProvider = ({ children }) => {
	const [ botsData, setBotsData ] = useState(data);
	const [ filteredBotsData, setFilteredBotsData ] = useState(data);
	const [ favoritesBots, setFavoritesBots ] = useState([]);

	const [ sort, setSort ] = useState({
		search: '',
		orderByName: false,
		orderByCreation: false,
		cardBlock: true,
		cardList: false,
	});

	// putting favorite bots into not repeating array
	const uniqueFavBots = [];
	for (let bot of favoritesBots) {
		uniqueFavBots.push(bot);
	}

	// Sorting data
	const sortData = (bots) => {
		// making a copy of original bots
		let tempBots = [ ...bots ];

		// making a copy of non favorable bots
		tempBots = tempBots.filter((bot) => !uniqueFavBots.includes(bot));

		// filtering based on search
		if (sort.search.length > 0) {
			tempBots = tempBots.filter((item) => {
				let tempSearch = sort.search.toLowerCase();
				let tempTitle = item.name.toLowerCase().slice(0, sort.search.length);
				if (tempSearch === tempTitle) return item;
			});
		}

		// filtering by name
		if (sort.orderByName === true) {
			tempBots = tempBots.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
		}
		// filtering by date

		if (sort.orderByCreation === true) {
			tempBots = tempBots.sort((a, b) => {
				if (a.created < b.created) {
					return -1;
				}
				if (a.created > b.created) {
					return 1;
				}
				return 0;
			});
		}

		// adding to favorites

		setFilteredBotsData(tempBots);
	};

	useEffect(
		() => {
			sortData(botsData);
		},
		[ JSON.stringify(sort), JSON.stringify(uniqueFavBots) ],
	);

	// adding bots to favorite list
	const addToFavorites = (bot) => {
		setFavoritesBots(new Set([ ...favoritesBots, bot ]));
	};

	return (
		<BotContext.Provider
			value={{
				filteredBotsData,
				botsData,
				favoritesBots,
				sort,
				uniqueFavBots,
				setSort,
				addToFavorites,
			}}>
			{children}
		</BotContext.Provider>
	);
};

export { BotProvider, BotContext };
