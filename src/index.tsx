import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './app';
import theme from './styles/theme';
import './index.css';

export default function Index() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</React.StrictMode>
	);
}

let rootElement = document.getElementById('root');
if (!rootElement) {
	rootElement = document.createElement('div');
	rootElement.id = 'root';
}
const root = ReactDOM.createRoot(rootElement);
root.render(<Index />);
