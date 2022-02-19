import * as S from './Button_Style';

interface ButtonProps {
	buttonName: string;
	backgroundColor: string;
	color: string;
	margin: string;
	type?: string;
	onClick?: () => void;
}

export default function Button({ type, onClick, buttonName, backgroundColor, color, margin }: ButtonProps) {
	return (
		<S.Container type="submit" onClick={onClick} backgroundColor={backgroundColor} color={color} margin={margin}>
			{buttonName}
		</S.Container>
	);
}
