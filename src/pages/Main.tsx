import React from 'react';
import PageSample from '@pages/PageSample';
import Button from '@components/button/Button';

function main() {
	return (
		<div className="main">
			<PageSample />
			<Button buttonName="출고주문서 다운로드" backgroundColor="#1a237e" color="#fff" />
			<Button buttonName="전체출고취소" backgroundColor="#1a237e" color="#fff" />
			<Button buttonName="매핑결과 최종 확인" backgroundColor="#1a237e" color="#fff" />
			<Button buttonName="목록으로" backgroundColor="#fff" color="#1a237e" />
		</div>
	);
}
export default main;
