import React, { useState, useEffect } from 'react';
import data from './data.json';

const BotContext = React.createContext();

const BotProvider = ({ children }) => {
	const [ botsData, setBotsData ] = useState(data);
	const [ filteredBotsData, setFilteredBotsData ] = useState(data);

	const [ sort, setSort ] = useState({
		search: '',
		orderByName: false,
		orderByCreation: false,
		cardBlock: true,
		cardList: false,
	});

	// Sorting data
	const sortData = (bots) => {
		// making a copy of original bots
		let tempBots = [ ...bots ];

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
			sortData([
				...botsData, //...uniqueFavBots
			]);
		},
		[ JSON.stringify(sort) ],
	);

	// Adding / Removing bots to favorite list
	const handleFavorites = (bot) => {
		// add bot to favorites
		if (bot.favorite === undefined || bot.favorite === false) {
			let newBots = filteredBotsData.filter((item) => item !== bot);
			bot.favorite = true;
			setFilteredBotsData([ ...newBots, bot ]);
		} else {
			// remove bot from favorites

			console.log(bot);
			setFilteredBotsData([ ...filteredBotsData, bot ]);
			bot.favorite = undefined;
		}
	};

	// const reomveFromFavorites = (bot) => {
	// 	console.log(bot);
	// };

	return (
		<BotContext.Provider
			value={{
				filteredBotsData,
				botsData,
				sort,

				setSort,
				handleFavorites,
			}}>
			{children}
		</BotContext.Provider>
	);
};

export { BotProvider, BotContext };
