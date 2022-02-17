import * as S from './Button_Style';

interface ButtonProps {
	buttonName: string;
	backgroundColor: string;
	color: string;
}

export default function Button({ buttonName, backgroundColor, color }: ButtonProps) {
	return (
		<S.Container backgroundColor={backgroundColor} color={color}>
			{buttonName}
		</S.Container>
	);
}
