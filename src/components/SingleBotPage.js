import React, { useContext } from 'react';
import styled from 'styled-components';
import blib from '../images/blip.png';
import plano from '../images/plano.png';
import userImg from '../images/user.png';
import sentImg from '../images/sent.png';
import { BotContext } from '../context';

const SingleBotPage = (props) => {
	console.log(props);
	const { botsData } = useContext(BotContext);
	const botShortName = props.match.params.id;

	const bot = botsData.filter((bot) => bot.shortName === botShortName)[0];

	console.log(bot);
	if (bot && bot.analytics.user) {
		return (
			<SingleBotPageWrapper>
				<div className='row '>
					<div className='col-12 d-flex justify-content-between'>
						<div className='bot-info d-flex align-items-center'>
							<div className='  user-image '>
								<img src={bot.image} alt='blib' />
							</div>
							<div className='bot-name'>
								<h5 className='d-block'>{bot.name}</h5>
								<p className='d-block'>id:{bot.shortName}</p>
							</div>
						</div>
						<div className='bot-history'>
							<p> Created at {bot.created}</p>
						</div>
					</div>
				</div>
				<div className='underline' />
				<div className='row mt-4'>
					<div className='col-9 d-grid gap-3 '>
						<div className='row grid-container'>
							<div className='col-4 left-div f-flex flex-column pl-2 pt-4'>
								<p>Region and idiom</p>
								<h6>EUA - English (EN)</h6>
								<p>Timezone</p>
								<h6>(UTC - 03:00) Brasilia</h6>
							</div>
							<div className='col-7 left-div'>
								<div className='bot-info d-flex align-items-center'>
									<div className='bot-image user'>
										<img src={userImg} alt='user' />
									</div>
									<div className='bot-name '>
										<h5 className='d-block'>{bot.analytics.user.actived}</h5>
										<p className='d-block'>Usarios ativos</p>
									</div>
								</div>
							</div>
						</div>
						<div className='row grid-container'>
							<div className='col-6 left-div'>
								<div className='bot-info d-flex align-items-center'>
									<div className='bot-image receive'>
										<img src={sentImg} alt='receive' />
									</div>
									<div className='bot-name'>
										<h5 className='d-block'>{bot.analytics.message.received}</h5>
										<p className='d-block'>Mensagens recebidas</p>
									</div>
								</div>
							</div>
							<div className='col-5 left-div'>
								<div className='bot-info  d-flex align-items-center  '>
									<div className='bot-image send'>
										<img src={sentImg} alt='send' />
									</div>
									<div className='bot-name'>
										<h5 className='d-block'>{bot.analytics.message.sent}</h5>
										<p className='d-block'>Mensagens enviadas</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-3 d-flex flex-column align-items-center '>
						<img src={plano} alt='plano' />
						<p className='plano'>status account</p>
						<h5 className='plano'>Free</h5>
						<button type='button' className='btn btn-info mt-5 '>
							Update account
						</button>
					</div>
				</div>
				<div className='underline' />
			</SingleBotPageWrapper>
		);
	} else {
		return (
			<div>
				<h1>something went error</h1>;
			</div>
		);
	}
};

export default SingleBotPage;

const SingleBotPageWrapper = styled.div`
	.bot-image {
		background: #deeaee;
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
		margin-right: .5rem;
	}
	.bot-image img {
		width: 2rem;
		height: 2rem;
		margin: 1rem;
	}

	.bot-name {
		margin-top: .5rem;
	}

	.bot-history {
		display: flex;
		align-self: center;
	}
	h5 {
		color: #52636c;
		margin-top: .5rem;
	}
	p {
		color: #939dab;
	}
	.underline {
		margin-top: 2rem;
		border-bottom: 5px solid #dbe4e8;
	}

	.left-div {
		background: white;
		display: flex;
		padding-left: 2rem;
		box-shadow: 0px 0px 10px -2px rgb(0 0 0 / 20%);
		border-radius: 1rem;
		min-height: 12rem;
	}
	.grid-container {
		/* grid-template-columns: 1fr 1fr; */
		grid-column-gap: 20px;
	}

	.user {
		background: #2ec0d3;
	}
	.receive {
		background: #59bd77;
	}
	.send {
		background: #5975b9;
	}
	.btn-info {
		border-radius: 1rem;
	}
	.plano {
		margin: 0;
		padding: 0;
	}

	.user-image {
		width: 4rem;
		height: 4rem;
		margin: 1rem;
	}
	.user-image img {
		border-radius: 50%;
		width: 4.2rem;
		height: 4.2rem;
	}
`;

// #DEEAEE
