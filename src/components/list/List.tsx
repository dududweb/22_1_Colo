import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './List_Style';
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

	const columns = [
		{ id: 'date', label: '출고요청일자', minWidth: 110 },
		{ id: 'release_status', label: '출고 상태', minWidth: 110 },
		{ id: 'release_type', label: '출고 유형', minWidth: 110 },
		{
			id: 'file_name',
			label: '출고서파일명',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'order_id',
			label: '액셀 행 순번',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'map_status',
			label: '매핑상태',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'order_form',
			label: '주문서 양식',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'order_num',
			label: '주문번호',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'linked_product',
			label: '연동상품ID',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'product_name',
			label: '주문명',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'comp_product_name',
			label: '콜로상품명',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'comp_product_code',
			label: '콜로상품코드',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'comp_product_id',
			label: '콜로상품ID',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'amount',
			label: '주문수량',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'unit',
			label: '주문단위',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'release_amount',
			label: '출고수량',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'warehouse',
			label: '출고창고명',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'lack_stock',
			label: '재고부족여부',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'warehouse',
			label: '주문자',
			minWidth: 110,
			align: 'center',
		},
		{
			id: 'user_phone',
			label: '전화번호',
			minWidth: 110,
			align: 'center',
		},
	];

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
									{columns.slice(0, 10).map((column) => (
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
									{columns.slice(10, 20).map((column) => (
										<TableCell
											key={column.id}
											style={{
												top: 57,
												minWidth: column.minWidth,
												backgroundColor: 'lightgrey',
												borderBlockColor: 'gray',
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
										<div>
											{columns.slice(0, 10).map((column) => {
												const value = row[column.id];
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
										</div>
										<div>
											{columns.slice(10, 20).map((column) => {
												const value = row[column.id];
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
										</div>
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
