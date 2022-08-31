import styled, { css } from 'styled-components';
import { LockPassword, User } from '../../styles/Icons';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 30em;
`;

export const Box = styled.div`
	display: flex;
	background-color: #FFF;
	
	width: 200px;
	height: auto;
	border-radius: 10px;
	padding: 15px;
	
	position: absolute;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	
	> p { 
		height: 10px;
		font-size: 15px;
		color: #ff0000;
		margin-top: -20px; 
        margin-bottom: 7px;  	
	};

	> div {
		width: 100%;
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 39px;
	font-size: 14px;
	padding: 0px 0px 0px 52px;
	border-radius: 7.5px;
	background: var(--secondary);

	${({ textError }: { textError: string }) => {
		return css`
		color: ${textError === 'error' ? '#ff0000' : '#000'};
		`;
	}};

	&:hover {
	box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
	}
	
	&::placeholder {
		color: var(--gray);
	}

	~ svg {
		transition: 180ms ease-in-out;
		position: relative;
		top: -33px;
		left: 15px;
		z-index: 1;
	}

	border: 2px solid #000;
	outline: 0;

	&:focus {
		border: 2px solid #333;

		~ svg {
			fill: var(--gray);
		}
	}
`;

export const UserIcon = styled(User)`
	width: 23px;
	height: 23px;
	margin-top: 2px;
	position: absolute;
	fill: var(--gray);
	`;

export const PasswordIcon = styled(LockPassword)`
	width: 23px;
	height: 23px;
	margin-top: 2px;
	position: absolute;
	fill: var(--gray);
	`;

export const Button = styled.button`
		display: flex;
		background-color: #333;
		width: 130px;
		min-height: 40px;

		/* margin-bottom: 10px; */
		margin-top: 10px;

		align-items: center;
		justify-content: center;
		border-radius: 6px;

		> span {
			font-size: 15px;
			color: #fff
		}
`;