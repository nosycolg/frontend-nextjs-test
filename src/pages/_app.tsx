import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import { MessagesProvider } from '@/context/messages';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Teste Front-End - BNP</title>
			</Head>

			<QueryClientProvider client={queryClient}>
				<MessagesProvider>
					<Component {...pageProps} />
				</MessagesProvider>
			</ QueryClientProvider>

			<Toaster />
		</>
	);
}

