import * as S from './Side_Style';
import React, { useState } from 'react';
import { RELEASE_DATA } from './SideData';
import DatePicker from '@components/datePicker/DatePicker';

// interface Root2 {
// 	id: number;
// 	title: string;
// 	selectItems: string[];
// }

export default function Side() {
	console.log(RELEASE_DATA);
	const [startDate, setStartDate] = useState<number>(0);
	const [endDate, setEndDate] = useState<number>(0);
	console.log(typeof startDate);

	const List = [{ name: '출고요청' }, { name: '출고중' }, { name: '출고완료' }];

	return (
		<S.Side>
			<S.SideInner>
				<S.SideTitle>출고 신청 번호</S.SideTitle>
				<S.ReleaseInfo>
					<S.InfoList>
						<S.InfoItmesTitle>출고요청번호</S.InfoItmesTitle>
						<S.InfoItmesContents>Xl-21212-212</S.InfoItmesContents>
					</S.InfoList>
					{RELEASE_DATA.map((items) => {
						return (
							<S.InfoList key={items.id}>
								<S.InfoItmesTitle>{items.title}:</S.InfoItmesTitle>
								{items.selectItems.length === 1 ? (
									<S.InfoItmesContents>{items.selectItems}</S.InfoItmesContents>
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
							</S.InfoList>
						);
					})}
					<S.InfoList>
						<S.InfoItmesTitle>출고요청 일자</S.InfoItmesTitle>
						<S.InfoItmesContents>
							<DatePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
						</S.InfoItmesContents>
					</S.InfoList>
				</S.ReleaseInfo>
			</S.SideInner>
		</S.Side>
	);
}
