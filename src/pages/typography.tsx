import React from 'react';
import { Explain } from '../components/Explain';
import Head from 'next/head';

export const metaTitle = 'Typograhpy';
export const metaDescription =
    'Typograhpy, examples of all supported types of typography';

function Page() {
    return (
        <>
            <Head>
                <title>
                    {metaTitle} - Design System - Het Financieele Dagblad
                </title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="twitter:title" content={metaTitle} />
                <meta
                    property="twitter:description"
                    content={metaDescription}
                />
            </Head>

            <Explain
                cssClassNames={['heading']}
                legend="Heading sans"
                hideReact={true}
                description={
                    <>
                        <p>Example of sans headings.</p>
                    </>
                }
            >
                <>
                    <h1 className="heading sans xs">Heading sans xs</h1>
                    <h1 className="heading sans s">Heading sans s</h1>
                    <h1 className="heading sans m">Heading sans m</h1>
                    <h1 className="heading sans l">Heading sans l</h1>
                    <h1 className="heading sans xl">Heading sans xl</h1>
                    <h1 className="heading sans xxl">Heading sans xxl</h1>
                </>
            </Explain>

            <Explain
                cssClassNames={['heading']}
                legend="Heading sans-serif bold"
                hideReact={true}
                description={
                    <>
                        <p>Example of sans-serif bold headings.</p>
                    </>
                }
            >
                <>
                    <h1 className="heading sans bold xs">
                        Heading sans bold xs
                    </h1>
                    <h1 className="heading sans bold s">Heading sans bold s</h1>
                    <h1 className="heading sans bold m">Heading sans bold m</h1>
                    <h1 className="heading sans bold l">Heading sans bold l</h1>
                    <h1 className="heading sans bold xl">
                        Heading sans bold xl
                    </h1>
                    <h1 className="heading sans bold xxl">
                        Heading sans bold xxl
                    </h1>
                </>
            </Explain>

            <Explain
                cssClassNames={['heading']}
                legend="Heading sans-serif slim"
                hideReact={true}
                description={
                    <>
                        <p>Example of sans-serif slim headings.</p>
                    </>
                }
            >
                <>
                    <h1 className="heading sans slim xs">
                        Heading sans slim xs
                    </h1>
                    <h1 className="heading sans slim s">Heading sans slim s</h1>
                    <h1 className="heading sans slim m">Heading sans slim m</h1>
                    <h1 className="heading sans slim l">Heading sans slim l</h1>
                    <h1 className="heading sans slim xl">
                        Heading sans slim xl
                    </h1>
                    <h1 className="heading sans slim xxl">
                        Heading sans slim xxl
                    </h1>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text sans-serif"
                hideReact={true}
                description={
                    <>
                        <p>Example of body text sans-serif.</p>
                    </>
                }
            >
                <>
                    <p className="body-text sans xs">body-text sans xs</p>
                    <p className="body-text sans s">body-text sans s</p>
                    <p className="body-text sans m">body-text sans m</p>
                    <p className="body-text sans l">Reserved</p>
                    <p className="body-text sans xl">Reserved</p>
                    <p className="body-text sans xxl">Reserved</p>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text sans-serif bold"
                hideReact={true}
                description={
                    <>
                        <p>Example of body text sans-serif bold.</p>
                    </>
                }
            >
                <>
                    <p className="body-text sans bold xs">
                        body-text sans bold xs
                    </p>
                    <p className="body-text sans bold s">
                        body-text sans bold s
                    </p>
                    <p className="body-text sans bold m">
                        body-text sans bold m
                    </p>
                    <p className="body-text sans bold l">Reserved</p>
                    <p className="body-text sans bold xl">Reserved</p>
                    <p className="body-text sans bold xxl">Reserved</p>
                </>
            </Explain>

            <Explain
                cssClassNames={['body-text']}
                legend="Body text sans-serif slim"
                hideReact={true}
                description={
                    <>
                        <p>Example of body text sans-serif slim.</p>
                    </>
                }
            >
                <>
                    <p className="body-text sans slim xs">
                        body-text sans slim xs
                    </p>
                    <p className="body-text sans slim s">
                        body-text sans slim s
                    </p>
                    <p className="body-text sans slim m">
                        body-text sans slim m
                    </p>
                    <p className="body-text sans slim l">Reserved</p>
                    <p className="body-text sans slim xl">Reserved</p>
                    <p className="body-text sans slim xxl">Reserved</p>
                </>
            </Explain>
        </>
    );
}

export default Page;
