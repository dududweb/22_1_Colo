import styled from 'styled-components';

export const Container = styled.button<{ backgroundColor: string; color: string; margin: string }>`
	width: 120px;
	height: 26px;
	margin-left: 10px;
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'red')};
	color: ${(props) => (props.color ? props.color : 'red')};
	margin: ${(props) => props.margin}px;
	border: 1px solid #1a237e;
	border-radius: 2px;
	font-weight: 600;
	font-size: 12px;
	cursor: pointer;
`;
