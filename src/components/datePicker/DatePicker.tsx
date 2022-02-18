import * as S from './DatePicker_Style';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface BasicDatePicker {
	startDate: object;
	endDate: object;
	setStartDate: () => void;
	setEndDate: () => void;
}

export default function BasicDatePicker(props: any) {
	const { startDate, setStartDate, endDate, setEndDate } = props;
	console.log(startDate, endDate);

	return (
		<S.DatepickerContainer>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label="YYYY.MM.DD YY:MM"
					value={startDate}
					onChange={(newValue) => {
						setStartDate(newValue);
					}}
					renderInput={(params: any) => <TextField {...params} />}
					components={
						{
							// OpenPickerIcon: KeyboardArrowDownIcon,
						}
					}
				/>
			</LocalizationProvider>
			<div>~</div>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label="YYYY.MM.DD YY:MM"
					value={endDate}
					onChange={(newValue) => {
						setEndDate(newValue);
					}}
					renderInput={(params: any) => <TextField {...params} />}
					components={
						{
							// OpenPickerIcon: KeyboardArrowDownIcon,
						}
					}
				/>
			</LocalizationProvider>
		</S.DatepickerContainer>
	);
}
