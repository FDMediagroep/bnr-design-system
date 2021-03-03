import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document<any> {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/favicon.ico" rel="shortcut icon" />
                    <meta name="msapplication-TileColor" content="#000000" />

                    <script src="/assets/cssbeautify.js" />
                    <link href="/assets/fonts/fonts.css" rel="stylesheet" />

                    <meta property="og:site_name" content="BNR Design System" />

                    <meta property="og:type" content="article" />

                    <meta
                        property="og:image"
                        content="/assets/images/default-share.png"
                    />

                    <meta property="twitter:name" content="summary" />

                    <meta property="twitter:site" content="BNR Design System" />

                    <meta
                        property="twitter:image"
                        content="/assets/images/default-share.png"
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `try {
    var query = window.matchMedia("(prefers-color-scheme: dark)");
    var preference = window.localStorage.getItem("theme");
    if (preference) {
        if ((preference === "system" && query.matches) || preference === "dark") {
            document.documentElement.style.backgroundColor = "#191919";
        } else {
            document.documentElement.style.backgroundColor = "#FFFFFF";
        }
    }
} catch (e) {}`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
