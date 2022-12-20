import Head from 'next/head';
import Script from 'next/script';

export default function App() {
	const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  console.log(process.env.NEXT_PUBLIC_ENVIRONMENT)

	return (
		<>
			<Head>
				{ isProd && (
					<>
						<Script
							src="https://www.googletagmanager.com/gtag/js?id=G-GX10NYC1H6"
							strategy="afterInteractive"
						/>
						<Script>
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());

								gtag('config', 'G-GX10NYC1H6');
							`}
						</Script>
					</>
				)}
			</Head>
			<h1>Hello</h1>
		</>
	)
}
