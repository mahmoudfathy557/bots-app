import styled from 'styled-components';
import CardBlock from './CardBlock';
import CardList from './CardList';
import React, { useContext, useEffect } from 'react';
import { BotContext } from '../../context';

const Favorites = () => {
	const { sort } = useContext(BotContext);

	return (
		<FavoritesWrapper>
			<h2>Favorites</h2>
		</FavoritesWrapper>
	);
};

export default Favorites;

const FavoritesWrapper = styled.div`
	margin-top: 2rem;
	padding-bottom: 2rem;

	border-bottom: 3px solid #d8e4eb;
	h2 {
		color: #607c9a;
	}
`;
