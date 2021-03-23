import React from 'react';
import star from '../../images/star.png';
import favorite from '../../images/favorite.png';
import data from '../../data.json';

const CardBot = () => {
	return (
		<div className='card-container'>
			<div className='card'>
				<div className='star'>
					<img src={star} alt='star' />
				</div>
				<div className='bot mx-auto'>
					<div className='image'>
						<img src={data[0].image} className=' rounded mx-auto  d-block' alt='...' />
					</div>
					<div className='bot-info mt-2'>
						<h5>Bot name</h5>
						<p>Router</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardBot;
