import React, { useState, useEffect } from 'react';
import data from './data.json';

const BotContext = React.createContext();

const BotProvider = ({ children }) => {
	let localStorageData = localStorage.getItem('data');
	const [ botsData, setBotsData ] = useState(localStorageData ? JSON.parse(localStorageData) : data);
	const [ filteredBotsData, setFilteredBotsData ] = useState(localStorageData ? JSON.parse(localStorageData) : data);

	const [ sort, setSort ] = useState({
		search: '',
		orderByName: false,
		orderByCreation: false,
		cardBlock: true,
		cardList: false,
	});

	console.log(filteredBotsData);
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

		console.log(tempBots);
		setFilteredBotsData(tempBots);
	};

	useEffect(
		() => {
			sortData(botsData);
		},
		[ JSON.stringify(sort) ],
	);

	// Adding / Removing bots to favorite list
	const handleFavorites = (bot) => {
		// add bot to favorites
		if (bot.favorite === undefined || bot.favorite === false) {
			let newBots = filteredBotsData.filter((item) => item !== bot);

			bot.favorite = true;
			localStorage.setItem('data', JSON.stringify([ ...newBots, bot ]));
			setFilteredBotsData([ ...newBots, bot ]);
		} else {
			// remove bot from favorites

			bot.favorite = undefined;
			localStorage.setItem('data', JSON.stringify([ ...filteredBotsData ]));
			setFilteredBotsData([ ...filteredBotsData ]);
		}
	};

	// create new bot
	const createNewBot = (bot) => {
		const { activeUsers, messagesReceived, messagesSent, name, shortName, totalUsers } = bot;

		let newBot = {
			shortName,
			name,
			image: 'https://picsum.photos/200/300',
			description: '',
			template: 'Router',
			created: new Date(),
			updated: new Date(),
			plan: 'free',
			culture: '',
			analytics: {
				user: {
					total: totalUsers,
					actived: activeUsers,
				},
				message: {
					received: messagesReceived,
					sent: messagesSent,
				},
			},
		};
		// localStorage.setItem(key, value)
		localStorage.setItem(
			'data',
			localStorageData
				? JSON.stringify([ ...JSON.parse(localStorageData), newBot ])
				: JSON.stringify([ ...filteredBotsData, newBot ]),
		);
		setFilteredBotsData([ ...filteredBotsData, newBot ]);
		setBotsData([ ...filteredBotsData, newBot ]);
	};

	return (
		<BotContext.Provider
			value={{
				filteredBotsData,
				botsData,
				sort,
				createNewBot,
				setSort,
				handleFavorites,
			}}>
			{children}
		</BotContext.Provider>
	);
};

export { BotProvider, BotContext };
