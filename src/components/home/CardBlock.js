import React, { useContext } from 'react';
import styled from 'styled-components';
import starImage from '../../images/star.png';
import favorite from '../../images/favorite.png';
import { Link } from 'react-router-dom';
import { BotContext } from '../../context';

const CardBlock = ({ card, star }) => {
	const { handleFavorites } = useContext(BotContext);

	return (
		<CardBlockWrapper>
			<div className='card  '>
				<div className='star' onClick={(e) => handleFavorites(card)}>
					<img src={star ? starImage : favorite} alt='star' />
				</div>
				<Link to={`/bots/${card.shortName}`}>
					<div className='bot mx-auto'>
						<div className='image'>
							<img src={card.image} className='   rounded mx-auto  d-block' alt='...' />
						</div>
						<div className='bot-info mt-2'>
							<h5>{card.name}</h5>
							<p>{card.template}</p>
						</div>
					</div>
				</Link>
			</div>
		</CardBlockWrapper>
	);
};

export default CardBlock;

const CardBlockWrapper = styled.div`
	.card {
	background: white;
    
    min-height: 30%;
    height: 13rem;
    box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 20%);
    position: relative;
				
}
 
	}

	.star {
		position: absolute;
		left: 10px;
		top: 10px;
		cursor: pointer;

	}

	.bot {
		margin-top: 2rem;
	}

	.image img {
		border-radius: 50% !important;
		width: 80px;
		height: 80px;
	}

	h5,
	p {
		display: block;
		text-align: center;
	}

	h5 {
		color: #52636c;
	}
	p {
		color: #939dab;
	}
`;
