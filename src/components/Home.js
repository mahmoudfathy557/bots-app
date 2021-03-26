import React, { useContext, useState } from 'react';
import Header from './home/Header';
import styled from 'styled-components';
import addBtn from '../images/add.png';
import CardBot from './home/CardBot';
import { Link } from 'react-router-dom';

import { BotContext } from '../context';

const Home = () => {
	const { sort, filteredBotsData } = useContext(BotContext);

	console.log(JSON.parse(localStorage.getItem('data')));

	return (
		<HomeWrapper>
			<div className='home-container'>
				<Header />

				{filteredBotsData.length > 0 ? (
					<div className='bots'>
						<div className='favorites'>
							{/* Favorite Bots */}
							<h2>Favorites</h2>
							{sort.cardBlock ? (
								<div className='card-block '>
									{filteredBotsData.map((card, id) => {
										if (card.favorite === true) {
											return <CardBot block={sort.cardBlock} key={id} card={card} star={true} />;
										}
									})}
								</div>
							) : (
								filteredBotsData.map((card, id) => {
									if (card.favorite === true) {
										return <CardBot block={sort.cardBlock} key={id} card={card} star={true} />;
									}
								})
							)}
						</div>
						<div className='underline mb-4' />

						{/* Regular Bots  */}
						<div className='non-favorites'>
							{sort.cardBlock ? (
								<div className='card-block '>
									{filteredBotsData.map((card, id) => {
										if (card.favorite === undefined) {
											return <CardBot block={sort.cardBlock} key={id} card={card} star={false} />;
										}
									})}
								</div>
							) : (
								filteredBotsData.map((card, id) => {
									if (card.favorite === undefined) {
										return <CardBot block={sort.cardBlock} key={id} card={card} star={false} />;
									}
								})
							)}
						</div>
					</div>
				) : (
					<div className='text-center mt-5 pt-5'>
						<h1>Sorry, No data found!!</h1>
					</div>
				)}

				<div className='underline' />

				<Link to='/bots/create-bots'>
					<div className='add-button '>
						<img src={addBtn} alt='add btn' />
					</div>
				</Link>
			</div>
		</HomeWrapper>
	);
};

export default Home;

const HomeWrapper = styled.div`
	position: relative;
	min-height: 80vh;
	a {
		text-decoration: none;
	}
	.favorites {
		margin-top: 2rem;
		padding-bottom: 2rem;

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
		position: fixed;

		display: flex;
		padding: 1rem;
		bottom: 1rem;
		background: #2ec0d3;
		right: 3rem;
		transition: 0.3s linear all !important;
	}

	.add-button:hover {
		background-color: #57b846;
	}
`;
