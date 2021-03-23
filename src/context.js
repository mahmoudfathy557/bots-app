import React, { useState, useEffect } from 'react';
import data from './data.json';

const BotContext = React.createContext();

const BotProvider = ({ children }) => {
	const [ isBlock, setIsBlock ] = useState(false);
	const [ botsData, setBotsData ] = useState([]);
	const favoritesBots = [];
	const [ sort, setSort ] = useState({
		search: '',
		orderByName: false,
		orderByCreation: false,
	});
	useEffect(() => {
		setBotsData(data);
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
			tempBots = tempBots.sort();
		}

		if (sort.orderByCreation === true) {
			tempBots = tempBots.sort((a, b) => {
				return a.created - b.created;
			});
		}
	};

	console.log(data);
	return (
		<BotContext.Provider
			value={{
				isBlock,
				botsData,
			}}>
			{children}
		</BotContext.Provider>
	);
};

export { BotProvider, BotContext };
