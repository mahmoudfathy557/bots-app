import React from 'react';
import star from '../../images/star.png';
import favorite from '../../images/favorite.png';
import data from '../../data.json';
import styled from 'styled-components';
import CardBlock from './CardBlock';
import CardList from './CardList';

const CardBot = ({ block, card, addToFavorites }) => {
	return (
		<CardBotWrapper>
			{block ? (
				<CardBlock card={card} addToFavorites={addToFavorites} />
			) : (
				<CardList card={card} addToFavorites={addToFavorites} />
			)}
		</CardBotWrapper>
	);
};

export default CardBot;

const CardBotWrapper = styled.div``;
