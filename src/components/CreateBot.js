import React, { useState, useContext } from 'react';
import { BotContext } from '../context';

const CreateBot = (props) => {
	const { createNewBot } = useContext(BotContext);

	const [ bot, setBot ] = useState({
		shortName: '',
		name: '',
		totalUsers: 0,
		activeUsers: 0,
		messagesReceived: 0,
		messagesSent: 0,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		createNewBot(bot);
		props.history.push('/');
	};

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='mb-3'>
					<label className='form-label'>Short name</label>
					<input
						required={true}
						type='text'
						className='form-control'
						id='shortName'
						placeholder='short name'
						value={bot.shortName}
						onChange={(e) => setBot({ ...bot, shortName: e.target.value })}
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Full Name</label>
					<input
						required={true}
						type='text'
						className='form-control'
						id='name'
						placeholder='full name'
						value={bot.name}
						onChange={(e) => setBot({ ...bot, name: e.target.value })}
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>total users</label>
					<input
						required={true}
						type='number'
						className='form-control'
						id='total users'
						placeholder='total users'
						value={bot.totalUsers}
						onChange={(e) => setBot({ ...bot, totalUsers: e.target.value })}
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>active users</label>
					<input
						required={true}
						type='number'
						className='form-control'
						id='active users'
						placeholder='name@example.com'
						value={bot.activeUsers}
						onChange={(e) => setBot({ ...bot, activeUsers: e.target.value })}
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>message received</label>
					<input
						required={true}
						type='number'
						className='form-control'
						id='message received'
						placeholder='message received'
						value={bot.messagesReceived}
						onChange={(e) => setBot({ ...bot, messagesReceived: e.target.value })}
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>message sent</label>
					<input
						required={true}
						type='number'
						className='form-control'
						id='message sent'
						placeholder='message sent'
						value={bot.messagesSent}
						onChange={(e) => setBot({ ...bot, messagesSent: e.target.value })}
					/>
				</div>

				<button type='submit' className='btn btn-primary'>
					Create Bot
				</button>
			</form>
		</div>
	);
};

export default CreateBot;
