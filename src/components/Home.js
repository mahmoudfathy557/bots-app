import React, { useContext } from 'react';
import Header from './home/Header';
import styled from 'styled-components';
import addBtn from '../images/add.png';
import CardBot from './home/CardBot';

import { BotContext } from '../context';

const Home = () => {
	const { sort, filteredBotsData, addToFavorites, uniqueFavBots } = useContext(BotContext);

	return (
		<HomeWrapper>
			<Header />

			<div className='favorites'>
				<h2>Favorites</h2>
				{uniqueFavBots && sort.cardBlock ? (
					<div className='card-block '>
						{uniqueFavBots.map((card, id) => {
							return (
								<CardBot
									block={sort.cardBlock}
									key={id}
									card={card}
									addToFavorites={addToFavorites}
									star={true}
								/>
							);
						})}
					</div>
				) : (
					uniqueFavBots.map((card, id) => {
						return (
							<CardBot
								block={sort.cardBlock}
								key={id}
								card={card}
								addToFavorites={addToFavorites}
								star={true}
							/>
						);
					})
				)}
				<div className='underline mb-4' />

				{filteredBotsData && sort.cardBlock ? (
					<div className='card-block '>
						{filteredBotsData.map((card, id) => {
							return (
								<CardBot
									block={sort.cardBlock}
									key={id}
									card={card}
									addToFavorites={addToFavorites}
									star={false}
								/>
							);
						})}
					</div>
				) : (
					filteredBotsData.map((card, id) => {
						return (
							<CardBot
								block={sort.cardBlock}
								key={id}
								card={card}
								addToFavorites={addToFavorites}
								star={false}
							/>
						);
					})
				)}
			</div>

			<div className='add-button'>
				<img src={addBtn} alt='add btn' />
			</div>
		</HomeWrapper>
	);
};

export default Home;

const HomeWrapper = styled.div`
	position: relative;

	a {
		text-decoration: none;
	}
	.favorites {
		margin-top: 2rem;
		padding-bottom: 2rem;

		border-bottom: 3px solid #d8e4eb;
		h2 {
			color: #607c9a;
			margin-bottom: 1rem;
		}
	}
	.card-block {
		display: grid;
		grid-auto-flow: row;
		max-width: 100%;
		grid-template-columns: repeat(6, 1fr);
		gap: 40px;
		column-gap: 40px;
	}

	.add-button {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		position: -webkit-sticky;
		position: fixed;

		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		padding: 1rem;
		bottom: 1rem;
		background: #2ec0d3;
		right: 3rem;
	}
`;
