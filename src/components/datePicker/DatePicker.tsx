import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Datepicker } from './DatePicker_Style';

export default function BasicDatePicker(props: any) {
	const { startDate, setStartDate, endDate, setEndDate } = props;

	return (
		<Datepicker>
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
		</Datepicker>
	);
}
