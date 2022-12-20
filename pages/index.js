import Head from 'next/head';
import Script from 'next/script';
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from '../lib/posts';

export default function App({allPostsData}) {
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
			<ul>
			{allPostsData.map(({ id, date, title }) => (
				<li key={id}>
				{title}
				<br />
				{id}
				<br />
				{date}
				</li>
			))}
			</ul>
		</>
	)
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
}
