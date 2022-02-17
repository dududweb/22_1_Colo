import * as S from './Button_Style';

interface ButtonProps {
	buttonName: string;
	backgroundColor: string;
	color: string;
	margin: string;
}

export default function Button({ buttonName, backgroundColor, color, margin }: ButtonProps) {
	return (
		<S.Container backgroundColor={backgroundColor} color={color} margin={margin}>
			{buttonName}
		</S.Container>
	);
}
