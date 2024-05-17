import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { MessagesProvider } from '@/context/messages';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			<MessagesProvider>
				<Component {...pageProps} />
			</MessagesProvider>
		</>
	);
}

