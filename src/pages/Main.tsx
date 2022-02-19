import * as S from './Main_Style';
import List from '@components/list/List';
import Header from '@components/header/Header';
import Side from '@components/side/Side';

function main() {
	return (
		<>
			<Header />
			<S.MainSeciton>
				<Side />
				<List />
			</S.MainSeciton>
		</>
	);
}
export default main;
