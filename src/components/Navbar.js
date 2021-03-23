import React from 'react';
import styled from 'styled-components';
import blib from '../images/logo.png';

const Navbar = () => {
	return (
		<NavbarWrapper>
			<nav className='navbar navbar-light  styled-navbar'>
				<div className='container d-flex justify-content-center  '>
					<a className='navbar-brand' href='/'>
						<img className='brand-img' src={blib} alt='brand logo' />
					</a>
				</div>
			</nav>
		</NavbarWrapper>
	);
};

export default Navbar;

const NavbarWrapper = styled.div`
	.styled-navbar,
	.brand-img {
		background: #1a2437;
	}
	.brand {
		color: white;
	}
`;
