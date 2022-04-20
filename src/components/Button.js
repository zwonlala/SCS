import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

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
	${props => {
		const selected = props.theme.palette.blue;

		return css`
			background: ${selected};
			&:hover {
				background: ${lighten(0.1, selected)};
			}
			&:active {
				background: ${darken(0.1, selected)};
			}
		`
	}}

	& + & {
		margin-left: 1rem;
	}
`;

function Button({children, ...rest}) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;