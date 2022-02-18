import * as S from './Side_Style';
import React from 'react';
import { RELEASE_DATA } from './SideData';

interface Root2 {
	id: number;
	title: string;
	selectItems: string[];
}

export default function Side() {
	console.log(RELEASE_DATA);
	return (
		<S.Side>
			<S.SideInner>
				<S.SideTitle>출고 신청 번호</S.SideTitle>
				<S.ReleaseInfo>
					<span>출고요청번호</span>
					<span>21212.212</span>
					{RELEASE_DATA.map((items) => {
						return (
							<div key={items.id}>
								<span>{items.title}:</span>
								{items.selectItems.length === 1 ? (
									<span>{items.selectItems}</span>
								) : (
									<select>
										{items.selectItems.map((selectList, index) => {
											return (
												<option key={index} value="">
													{selectList}
												</option>
											);
										})}
									</select>
								)}
							</div>
						);
					})}
				</S.ReleaseInfo>
			</S.SideInner>
		</S.Side>
	);
}
