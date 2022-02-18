import * as S from './Side_Style';
import React, { useState } from 'react';
import { RELEASE_DATA } from './SideData';
import DatePicker from '@components/datePicker/DatePicker';
import { useRecoilState } from 'recoil';
import { filteredReleaseData } from '../../atom';
import Button from '@components/button/Button';
import { optionGroupUnstyledClasses } from '@mui/base';

// interface Root2 {
// 	id: number;
// 	title: string;
// 	selectItems: string[];
// }

export default function Side({ handlefilterData }: any) {
	const [startDate, setStartDate] = useState<number>(0);
	const [endDate, setEndDate] = useState<number>(0);
	console.log(typeof startDate);

	// console.log('test>>', list);
	// const [filteredData, setFiltetedData] = useRecoilState(filteredReleaseData);
	// const [selectedData, setSelectedData] = useState({
	// 	rangeStartDate: startDate,
	// 	rangeEndDate: endDate,
	// 	release_status: '',
	// 	release_type: '',
	// });

	// const getSelectedData = (event: React.ChangeEvent<HTMLSelectElement>) => {
	// 	const { name, value } = event.target;
	// 	setSelectedData({ ...selectedData, [name]: value });
	// };

	const [lists, setLists] = useState({});

	// const { release_status, release_Type }: any = lists;

	const selectValue = (e: any) => {
		const { value, id } = e.target;
		setLists({
			...lists,
			[value]: value,
		});
	};

	console.log('lists>>>', lists);

	return (
		<S.Side>
			<S.SideInner>
				<S.SideTitle>출고 신청 번호</S.SideTitle>
				<S.ReleaseInfo>
					<S.InfoList>
						<S.InfoItemsTitle>출고요청번호</S.InfoItemsTitle>
						<S.InfoItemsContents>Xl-21212-212</S.InfoItemsContents>
					</S.InfoList>
					{RELEASE_DATA.map((items) => {
						return (
							<S.InfoList key={items.id}>
								<S.InfoItemsTitle>{items.title}:</S.InfoItemsTitle>
								{items.selectItems.length === 1 ? (
									<>
										{items.selectItems.map((selectList, index) => {
											return <S.InfoItemsContents>{selectList.name}</S.InfoItemsContents>;
										})}
									</>
								) : (
									<>
										<select onChange={selectValue}>
											{items.selectItems?.map((selectList: any, index) => {
												return (
													<option value={selectList.value} key={index}>
														{selectList.value}
													</option>
												);
											})}
										</select>
									</>
								)}
							</S.InfoList>
						);
					})}
					<S.InfoList>
						<S.InfoItemsTitle>출고요청 일자</S.InfoItemsTitle>
						<S.InfoItemsContents>
							<DatePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
						</S.InfoItemsContents>
					</S.InfoList>
					<Button onClick={handlefilterData} buttonName="검색" backgroundColor="white" color="blue" margin="0" />
				</S.ReleaseInfo>
			</S.SideInner>
		</S.Side>
	);
}
