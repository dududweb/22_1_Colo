import * as S from './Button_Style';

interface ButtonProps {
	buttonName: string;
	backgroundColor: string;
	color: string;
	margin: string;
	onClick?: () => void;
}

export default function Button({ onClick, buttonName, backgroundColor, color, margin }: ButtonProps) {
	return (
		<S.Container onClick={onClick} backgroundColor={backgroundColor} color={color} margin={margin}>
			{buttonName}
		</S.Container>
	);
}
