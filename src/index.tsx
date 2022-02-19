import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './Router';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
	<>
		<GlobalStyle />

		<ThemeProvider theme={theme}>
			<RecoilRoot>
				<Router />
			</RecoilRoot>
		</ThemeProvider>
	</>,
	document.getElementById('root'),
);
