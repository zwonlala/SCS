import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	outline: none;
	border: none;
	border-radius: 4px;
	color: white;
	font-weight: bold;
	cursor: pointer;
	padding-left: 1rem;
	padding-right: 1rem;

	// size
	height: 2.25rem;
	font-size: 1rem;

	// color
	background: #228be6;
	&:hover {
		background: #339af0;
	}
	&:active {
		backround: #1c7ed6;
	}

	& + & {
		margin-left: 1rem;
	}
`;

function Button({children, ...rest}) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;