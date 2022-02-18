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
	const columns = [
		{ id: 'name', label: 'Name', minWidth: 100 },
		{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
		{
			id: 'population',
			label: 'Population',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'size',
			label: 'Size\u00a0(km\u00b2)',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'density',
			label: 'Density',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toFixed(2),
		},
		{ id: 'name', label: 'Name', minWidth: 100 },
		{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
		{
			id: 'population',
			label: 'Population',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'size',
			label: 'Size\u00a0(km\u00b2)',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'density',
			label: 'Density',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toFixed(2),
		},
		{ id: 'name', label: 'Name', minWidth: 100 },
		{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
		{
			id: 'population',
			label: 'Population',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'size',
			label: 'Size\u00a0(km\u00b2)',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'density',
			label: 'Density',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toFixed(2),
		},
		{ id: 'name', label: 'Name', minWidth: 100 },
		{ id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
		{
			id: 'population',
			label: 'Population',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'size',
			label: 'Size\u00a0(km\u00b2)',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toLocaleString('en-US'),
		},
		{
			id: 'density',
			label: 'Density',
			minWidth: 100,
			align: 'right',
			format: (value: any) => value.toFixed(2),
		},
	];

	function createData(name: any, code: any, population: any, size: any) {
		const density = population / size;
		return { name, code, population, size, density };
	}

	const rows = [
		createData('India', 'IN', 1324171354, 3287263),
		createData('China', 'CN', 1403500365, 9596961),
		createData('Italy', 'IT', 60483973, 301340),
		createData('United States', 'US', 327167434, 9833520),
		createData('Canada', 'CA', 37602103, 9984670),
		createData('Australia', 'AU', 25475400, 7692024),
		createData('Germany', 'DE', 83019200, 357578),
		createData('Ireland', 'IE', 4857000, 70273),
		createData('Mexico', 'MX', 126577691, 1972550),
		createData('Japan', 'JP', 126317000, 377973),
		createData('France', 'FR', 67022000, 640679),
		createData('United Kingdom', 'GB', 67545757, 242495),
		createData('Russia', 'RU', 146793744, 17098246),
		createData('Nigeria', 'NG', 200962417, 923768),
		createData('Brazil', 'BR', 210147125, 8515767),
		createData('Korea', 'BR', 210147125, 8515767),
	];

	return (
		<S.Container>
			<div>출고 요청서 매핑 리스트</div>

			<Paper sx={{ width: '1100px' }}>
				<TableContainer sx={{ maxHeight: 600 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							{/* <TableRow>
								<TableCell align="center" colSpan={2}>
									Country
								</TableCell>
								<TableCell align="center" colSpan={3}>
									Details
								</TableCell>
							</TableRow> */}
							<TableRow style={{ width: '1100px' }}>
								{columns.map((column) => (
									<TableCell key={column.id} align={column.align} style={{ top: 0 }}>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row: any) => {
								return (
									<TableRow hover key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === 'number' ? column.format(value) : value}
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
