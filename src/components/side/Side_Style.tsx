import styled from 'styled-components';

export const Side = styled.aside`
	width: 350px;
	border-right: 1px solid #ebebeb;
`;

export const SideInner = styled.div`
	padding: 5px;
`;

export const SideTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontMedium};
`;

export const ReleaseInfo = styled.div`
	margin-top: 2rem;
`;
