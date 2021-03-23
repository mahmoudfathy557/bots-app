import React from 'react';
import styled from 'styled-components';
import star from '../../images/star.png';
import favorite from '../../images/favorite.png';
import data from '../../data.json';

const CardBlock = () => {
	return (
		<CardBlockWrapper>
			<div className='card  '>
				<div className='star'>
					<img src={star} alt='star' />
				</div>
				<div className='bot mx-auto'>
					<div className='image'>
						<img src={data[0].image} className='   rounded mx-auto  d-block' alt='...' />
					</div>
					<div className='bot-info mt-2'>
						<h5>Bot name</h5>
						<p>Router</p>
					</div>
				</div>
			</div>
		</CardBlockWrapper>
	);
};

export default CardBlock;

const CardBlockWrapper = styled.div`
	.card {
		background: white;

		min-height: 20%;
		height: 12rem;
		box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 20%);
		position: relative;
	}

	.star {
		position: absolute;
		left: 10px;
		top: 10px;
	}

	.bot {
		margin-top: 2rem;
	}

	.image img {
		border-radius: 50% !important;
		width: 60px;
		height: 60px;
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
