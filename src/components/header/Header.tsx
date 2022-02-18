import * as S from './Header_Style';
import React from 'react';
import Button from '@components/button/Button';

export default function Header() {
	return (
		<S.Header>
			<S.HeaderWrap>
				<S.HeaderTitle>
					<S.Tag>출고 관리</S.Tag>
					<S.Title>출고 매핑 관리</S.Title>
				</S.HeaderTitle>
				<Button buttonName="VOC 관리" backgroundColor="white" color="blue" margin="0" />
			</S.HeaderWrap>
		</S.Header>
	);
}
