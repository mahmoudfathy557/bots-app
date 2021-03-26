import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
	return (
		<ErrorWrapper>
			<div className='text-center   mt-5'>
				<h1>Ooooops!! something went wrong</h1>
				<Link to='/' className='btn btn-primary mt-5'>
					return home
				</Link>
			</div>
		</ErrorWrapper>
	);
};

export default Error;

const ErrorWrapper = styled.div`height: 83vh;`;
