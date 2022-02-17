import styled from 'styled-components';

export const Header = styled.header`
	padding: 20px 0;
	border-bottom: 1px solid #ebebeb;
`;

export const HeaderWrap = styled.div`
	max-width: ${({ theme }) => theme.desktopSize};
	${({ theme }) => theme.flexSpaceBetweenCenter};
	${({ theme }) => theme.marginCenter};
`;

export const HeaderTitle = styled.div`
	${({ theme }) => theme.flexColumnCenter}
	align-items: flex-start;
`;

export const Tag = styled.h3`
	font-size: ${({ theme }) => theme.fontSmall};
`;

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontMedium};
	margin-top: 10px;
`;
