import * as S from './List_Style';
import Button from '@components/button/Button';

export default function List() {
	return (
		<S.Container>
			<div>출고 요청서 매핑 리스트</div>

			<Button buttonName="출고주문서 다운로드" backgroundColor="#1a237e" color="#fff" margin="10" />
			<Button buttonName="전체출고취소" backgroundColor="#1a237e" color="#fff" margin="10" />
			<Button buttonName="매핑결과 최종 확인" backgroundColor="#1a237e" color="#fff" margin="10" />
			<Button buttonName="목록으로" backgroundColor="#fff" color="#1a237e" margin="10" />
		</S.Container>
	);
}
