import Head from 'next/head';
import Script from 'next/script';
import Link from "next/link";
import Image from "next/image";

export default function App() {
	const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

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
			<Image src="/images/profile.jpg" width={108} height={108} alt="Picture of Richard" />
			<h1>Hello</h1>
			<Link href="/blog">Blog</Link>
		</>
	)
}
