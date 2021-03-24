import React, { useContext } from 'react';
import styled from 'styled-components';
import starImage from '../../images/star.png';
import favorite from '../../images/favorite.png';
import { Link } from 'react-router-dom';
import { BotContext } from '../../context';
import moment from 'moment';

const CardList = ({ card, star }) => {
	const { handleFavorites, filteredBotsData } = useContext(BotContext);

	console.log(filteredBotsData);
	return (
		<CardListWrapper>
			<div className='row mt-3'>
				<div className='col'>
					<div className='card-container d-flex  justify-content-between align-items-center'>
						<div className='star' onClick={(e) => handleFavorites(card)}>
							<img src={star ? starImage : favorite} alt='star' />
						</div>
						<Link to={`/bots/${card.shortName}`} className='link'>
							<div className='card d-flex flex-row align-items-center justify-content-between   '>
								<div className='bot-info  d-flex '>
									<div className='image'>
										<img src={card.image} className='rounded mx-auto  d-block' alt='...' />
									</div>
									<h5 className='bot-name'>{card.name}</h5>
								</div>
								<div className='bot-history '>
									<p>
										Created at{' '}
										{typeof card.created === 'object' ? (
											moment(card.created).format('MMMM d, YYYY')
										) : (
											moment(card.created).format('MMMM d, YYYY')
										)}
									</p>
								</div>
							</div>
						</Link>
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
	.star {
		cursor: pointer;
	}
	.image img {
		border-radius: 50% !important;
		width: 40px;
		height: 40px;
	}

	.bot-history {
		margin-top: 1rem;
	}

	h5 {
		color: #52636c;
		margin-top: .5rem;
		margin-left: 1.2rem;
	}
	p {
		color: #939dab;
	}
	.link {
		width: 95%;
	}
`;
