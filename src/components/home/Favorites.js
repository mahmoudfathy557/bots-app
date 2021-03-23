import React from 'react';
import styled from 'styled-components';
import CardBlock from './CardBlock';
import CardList from './CardList';
const Favorites = () => {
	return (
		<FavoritesWrapper>
			<h2>Favorites</h2>
			{/* <div className='row'>
				<div className='col-12 col-md-4 col-xl-2'>
					<CardBlock />
				</div>
			</div> */}
			<CardList />
			<CardList />
			<CardList />
			<CardList />
			<CardList />
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
