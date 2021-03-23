import React, { useContext } from 'react';
import Header from './home/Header';
import Favorites from './home/Favorites';
import styled from 'styled-components';
import addBtn from '../images/add.png';
import CardBot from './home/CardBot';
import { BotContext } from '../context';

const Home = () => {
	const { sort } = useContext(BotContext);
	return (
		<HomeWrapper>
			<Header />
			<CardBot />
			<div className='add-button'>
				<img src={addBtn} alt='add btn' />
			</div>
		</HomeWrapper>
	);
};

export default Home;

const HomeWrapper = styled.div`
	position: relative;

	.card-block {
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
