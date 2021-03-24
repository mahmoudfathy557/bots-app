import styled from 'styled-components';
import organizeBlocks from '../../images/organize-blocks.png';
import organizeList from '../../images/organize-list.png';
import React, { useContext } from 'react';

import { BotContext } from '../../context';

const Header = () => {
	const { sort, setSort } = useContext(BotContext);

	return (
		<HeaderWrapper>
			<div className='  d-flex flex-column'>
				<div className='header-row d-flex justify-content-between'>
					<div className='header'>
						<h1>My chatbots</h1>
					</div>
					<div className='organize-btns d-flex  '>
						<div className='container'>
							<div className='row'>
								<div className='col-4'>
									<div className='input-group mb-3'>
										<input
											type='text'
											className='form-control search'
											placeholder='Search'
											value={sort.search}
											onChange={(e) => setSort({ ...sort, search: e.target.value })}
										/>
									</div>
								</div>
								<div className='col-6 '>
									<div className='btn-organize d-flex justify-content-between'>
										<button
											type='button'
											className='btn btn-info'
											onClick={() => setSort({ ...sort, orderByName: !sort.orderByName })}>
											Order by name
										</button>
										<button
											type='button'
											className='btn btn-info '
											onClick={() =>
												setSort({ ...sort, orderByCreation: !sort.orderByCreation })}>
											Order by creation
										</button>
									</div>
								</div>

								<div className='col-2 d-flex  blocks '>
									<div
										className='organize-blocks'
										onClick={() =>
											setSort({
												...sort,
												cardBlock: true,
												cardList: false,
											})}>
										<img src={organizeBlocks} alt='organize blocks' />
									</div>
									<div
										className='organize-list'
										onClick={() =>
											setSort({
												...sort,
												cardList: true,
												cardBlock: false,
											})}>
										<img src={organizeList} alt='organize list' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='  favorites-row' />
				<div className='  non-favorites-row' />
			</div>
		</HeaderWrapper>
	);
};

export default Header;

const HeaderWrapper = styled.div`
	.header h1 {
		color: #56616f;
	}

	.btn-info {
		color: white !important;
	}
	.organize-btns {
		width: 50%;
	}

	.search {
		width: 100%;

		border-radius: .7rem;

		border: 1px solid #e5edf1;
	}
	::placeholder {
		color: red;
		padding-left: 1rem;
	}
	.btn-organize button {
		width: 49% !important;
		border-radius: .7rem;
	}

	.blocks {
		margin-top: 3px;
	}

	.organize-blocks,
	.organize-list {
		cursor: pointer;
	}
`;
