import * as S from './List_Style';
import { COLUMNS_DATA } from './ListData';
import { useRecoilState } from 'recoil';
import Button from '@components/button/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { orderfilteredData } from '../../atom';
import { Fragment } from 'react';

export default function List() {
	const [orderFilterList, setOrderFilterList] = useRecoilState(orderfilteredData);

	return (
		<S.Container>
			<S.Title>출고 요청서 매핑 리스트</S.Title>

			<Paper sx={{ width: '1100px' }}>
				<TableContainer sx={{ maxHeight: 700 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<Fragment>
									{COLUMNS_DATA.slice(0, 10).map((column) => (
										<TableCell
											key={column.id}
											style={{
												top: 0,
												minWidth: column.minWidth,
												backgroundColor: 'lightgrey',
												borderBottomColor: 'gray',
												display: 'inline-block',
											}}
										>
											{column.label}
										</TableCell>
									))}
								</Fragment>
								<Fragment>
									{COLUMNS_DATA.slice(10, 20).map((column) => (
										<TableCell
											key={column.name}
											style={{
												top: 57,
												minWidth: column.minWidth,
												backgroundColor: 'lightgrey',
												borderBlockColor: 'gray',
												display: 'inline-block',
											}}
										>
											{column.label}
										</TableCell>
									))}
								</Fragment>
							</TableRow>
						</TableHead>
						{orderFilterList.length > 0 ? (
							<TableBody>
								{orderFilterList?.map((row: any) => {
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
						) : (
							<TableBody>
								<TableRow>
									<TableCell
										style={{
											padding: '100px',
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										출고 상태, 출고 유형을 선택해주세요.
									</TableCell>
								</TableRow>
							</TableBody>
						)}
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
