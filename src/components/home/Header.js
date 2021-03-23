import React from 'react';
import styled from 'styled-components';
import organizeBlocks from '../../images/organize-blocks.png';
import organizeList from '../../images/organize-list.png';
const Header = () => {
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
									<div class='input-group mb-3'>
										<input
											type='search'
											className='form-control search'
											name='search'
											id='search'
											placeholder='Search'
											aria-label='Search'
										/>
									</div>
								</div>
								<div className='col-6 '>
									<div className='btn-organize d-flex justify-content-between'>
										<button type='button' className='btn btn-info '>
											Order by name
										</button>
										<button type='button' className='btn btn-info '>
											Order by creation
										</button>
									</div>
								</div>

								<div className='col-2 d-flex  blocks '>
									<div className='organize-blocks '>
										<img src={organizeBlocks} alt='organize blocks' />
									</div>
									<div className='organize-list'>
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
`;
