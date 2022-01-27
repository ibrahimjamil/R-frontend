import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import {
	QueryClient,
	QueryClientProvider,
} from 'react-query';

require('src/styles/index.less');

const MyApp = (props) => {
	const { Component, pageProps } = props;
	const queryClient = new QueryClient();
	const router = useRouter();
	return (
		<QueryClientProvider client={queryClient}>
			<div suppressHydrationWarning>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0"
					/>
				</Head>
				{typeof window === 'undefined' ? null : <Component {...pageProps} router={router} />}
			</div>
		</QueryClientProvider>
	);
};

const propTypes = AppProps;

MyApp.propTypes = propTypes;

export default MyApp;
