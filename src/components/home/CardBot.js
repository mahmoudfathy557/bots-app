import React from 'react';

import styled from 'styled-components';
import CardBlock from './CardBlock';
import CardList from './CardList';

const CardBot = ({ block, card, star }) => {
	return (
		<CardBotWrapper>
			{block ? <CardBlock card={card} star={star} /> : <CardList card={card} star={star} />}
		</CardBotWrapper>
	);
};

export default CardBot;

const CardBotWrapper = styled.div``;
