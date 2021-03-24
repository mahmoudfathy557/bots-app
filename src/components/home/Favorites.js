import styled from 'styled-components';

import React from 'react';

const Favorites = () => {
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
