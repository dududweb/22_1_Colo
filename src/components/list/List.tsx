import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './List_Style';
import { COLUMNS_DATA } from './ListData';
import Button from '@components/button/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function List() {
	const [orderList, setOrderList] = useState<any[]>();
	// const [filterList, setFilterList] = useState<any[]>();

	// const handlefilterData = () => {
	// 	const result = orderList?.filter(
	// 		(el: any) => el.release_status === '출고요청' && el.release_type === '오전(10:00) 출고',
	// 	);
	// 	setOrderList(result);
	// };

	useEffect(() => {
		const result = orderList?.filter(
			(el: any) => el.release_status === '출고요청' && el.release_type === '오전(10:00) 출고',
		);
		setOrderList(result);
	}, []);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		axios
			.get('/mockData.json')
			.then((res: any) => {
				setOrderList(res.data.orderlist);
			})
			.catch((error) => console.log(error));
	};

	return (
		<S.Container>
			<S.Title>출고 요청서 매핑 리스트</S.Title>

			<Paper sx={{ width: '1100px' }}>
				<TableContainer sx={{ maxHeight: 700 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<div>
									{COLUMNS_DATA.slice(0, 10).map((column) => (
										<TableCell
											key={column.id}
											style={{
												top: 0,
												minWidth: column.minWidth,
												backgroundColor: 'lightgrey',
												borderBottomColor: 'gray',
											}}
										>
											{column.label}
										</TableCell>
									))}
								</div>
								<div>
									{COLUMNS_DATA.slice(10, 20).map((column) => (
										<TableCell
											key={column.name}
											style={{
												top: 57,
												minWidth: column.minWidth,
												backgroundColor: 'lightgrey',
												borderBlockColor: 'gray',
												display: '',
											}}
										>
											{column.label}
										</TableCell>
									))}
								</div>
							</TableRow>
						</TableHead>
						<TableBody>
							{orderList?.map((row: any) => {
								return (
									<TableRow hover key={row.code}>
										{COLUMNS_DATA.slice(0, 10).map((column) => {
											const value = row[column.name];
											return (
												<TableCell
													key={column.id}
													style={{
														width: '110px',
														fontSize: '12px',
														height: '10px',
														borderBottom: 'none',
														display: 'inline-block',
														whiteSpace: 'nowrap',
														overflow: 'hidden',
														textOverflow: 'ellipsis',
													}}
												>
													{value}
												</TableCell>
											);
										})}
										{COLUMNS_DATA.slice(10, 20).map((column) => {
											const value = row[column.name];
											return (
												<TableCell
													key={column.id}
													style={{
														width: '110px',
														fontSize: '12px',
														display: 'inline-block',
														whiteSpace: 'nowrap',
														overflow: 'hidden',
														textOverflow: 'ellipsis',
														borderBottomColor: 'gray',
													}}
												>
													{value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>

			<Button buttonName="출고주문서 다운로드" backgroundColor="#1a237e" color="#fff" margin="10" />
			<Button buttonName="전체출고취소" backgroundColor="#1a237e" color="#fff" margin="10" />
			<Button buttonName="매핑결과 최종 확인" backgroundColor="#1a237e" color="#fff" margin="10" />
			<Button buttonName="목록으로" backgroundColor="#fff" color="#1a237e" margin="10" />
		</S.Container>
	);
}
