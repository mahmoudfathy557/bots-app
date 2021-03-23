import React from 'react';
import styled from 'styled-components';
import star from '../../images/star.png';
import favorite from '../../images/favorite.png';

const CardList = () => {
	return (
		<CardListWrapper>
			<div className='row mt-3'>
				<div className='col'>
					<div className='card-container d-flex  justify-content-between align-items-center'>
						<div className='star  '>
							<img src={star} alt='star' />
						</div>
						<div className='card d-flex flex-row align-items-center justify-content-between   '>
							<div className='bot-info  d-flex '>
								<div className='ball  ' />
								<h5 className='bot-name'>Botname</h5>
							</div>
							<div className='bot-history '>
								<p> Created at 11/09/2019</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardListWrapper>
	);
};

export default CardList;

const CardListWrapper = styled.div`
	.card {
		background: white;
		width: 98%;
		height: 4rem;
		padding: 0 1rem;
		box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 20%);
		border-radius: .5rem;
	}

	.ball {
		background: red;
		width: 35px;
		height: 35px;
		margin-right: .6rem !important;
		border-radius: 50%;
	}

	.bot-history {
		margin-top: 1rem;
	}

	h5 {
		color: #52636c;
		margin-top: .2rem;
	}
	p {
		color: #939dab;
	}
`;
