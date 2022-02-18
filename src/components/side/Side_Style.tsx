import styled from 'styled-components';

export const Side = styled.aside`
	width: 400px;
	border-right: 1px solid #ebebeb;
	padding-left: 20px;
	margin-top: 2rem;
`;

export const SideInner = styled.div`
	padding: 5px;
`;

export const SideTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontMedium};
`;

export const ReleaseInfo = styled.ul`
	margin-top: 2rem;
`;

export const InfoList = styled.li`
	display: flex;
	margin-top: 1rem;
`;

export const InfoItmesTitle = styled.h4`
	width: 100px;
	margin-right: 50px;
	color: ${({ theme }) => theme.mainColor};
	font-weight: ${({ theme }) => theme.fontWeightBold};
`;

export const InfoItmesContents = styled.h4`
	padding-right: 10px;
`;
