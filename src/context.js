import React, { useState, useEffect } from 'react';
import data from './data.json';

const BotContext = React.createContext();

const BotProvider = ({ children }) => {
	const [ botsData, setBotsData ] = useState(data);
	const [ filteredBotsData, setFilteredBotsData ] = useState(data);
	const favoritesBots = [];
	const [ sort, setSort ] = useState({
		search: '',
		orderByName: false,
		orderByCreation: false,
		cardBlock: true,
		cardList: false,
	});
	useEffect(() => {
		sortData();
	}, []);

	// Sorting data
	const sortData = () => {
		let tempBots = [ ...botsData ];

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

		setFilteredBotsData(tempBots);
	};

	useEffect(
		() => {
			sortData();
		},
		[ JSON.stringify(sort) ],
	);
	console.log(filteredBotsData);
	return (
		<BotContext.Provider
			value={{
				filteredBotsData,
				sort,
				setSort,
			}}>
			{children}
		</BotContext.Provider>
	);
};

export { BotProvider, BotContext };
