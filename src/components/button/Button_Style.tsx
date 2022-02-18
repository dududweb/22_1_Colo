import styled from 'styled-components';

export const Container = styled.button<{ backgroundColor: string; color: string; margin: string }>`
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'red')};
	color: ${(props) => (props.color ? props.color : 'red')};
	margin: ${(props) => props.margin}px;
	border: 1px solid #e2e2e2;
	border-radius: 2px;
	font-weight: 600;
	font-size: 12px;
	padding: 10px 20px;
	cursor: pointer;
`;
