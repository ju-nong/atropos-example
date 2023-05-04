import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <meta name="theme-color" content="#B53DF5"></meta>
                <meta name="description" content="용숙이와 오아리"></meta>
                <meta name="keywords" content="dog, parallax, atropos"></meta>
                <meta name="author" content="이준용"></meta>
                <meta content="Touch Parallax" property="og:title"></meta>
                <meta
                    content="/images/yong-sook.png"
                    property="og:image"
                ></meta>
                <meta content="website" property="og:type"></meta>
                <meta
                    content="atropos-example.vercel.app"
                    property="og:site_name"
                ></meta>
                <meta
                    content="https://atropos-example.vercel.app/"
                    property="og:url"
                ></meta>
                <link rel="icon" href="/images/yong-sook.png"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
