import * as S from './Side_Style';
import React from 'react';

export default function Side() {
	return (
		<S.Side>
			<S.SideInner>
				<S.SideTitle>출고 신청 번호</S.SideTitle>
				<S.ReleaseInfo flex>
					<div>
						<span></span>
						<span></span>
					</div>
				</S.ReleaseInfo>
			</S.SideInner>
		</S.Side>
	);
}
