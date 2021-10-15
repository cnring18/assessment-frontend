import React from 'react';
import { useParams } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { Page } from './pages/page/Page';
import { PageContextWrapper } from './pages/page-context/PageContextWrapper';
import { theme } from './theme/theme';

const App = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<ThemeProvider theme={theme}>
			<PageContextWrapper id={id}>
				<Page />
			</PageContextWrapper>
		</ThemeProvider>
	);
};

export default App;
