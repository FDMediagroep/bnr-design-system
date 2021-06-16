import React, { useState } from 'react';
import { Explain } from '../../components/Explain';
import {
    VerticalCard1,
    getCssClassNames,
} from '../../components/card/VerticalCard1';
import Head from 'next/head';
import Link from 'next/link';
import styles from './cards.module.scss';

const verticalCards1: any = [
    {
        id: '1345422',
        label: 'Arbeidsmarkt',
        title: 'Lockdown leidt tot recordstijging aantal WW-uitkeringen in april',
        imageUrl:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlS:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        imageUrlM:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=351&h=234',
        imageUrlL:
            'https://images.fd.nl/Cz9PTU-el_agiaSDvJOfmwrvu6g.jpg?rect=.0%2c.0428571428571429%2c.9999999999999999%2c.95&fit=crop&crop=faces&auto=format&q=45&w=599&h=399',
        href: 'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        overlayImageUrl:
            'https://bnr-external-prod.imgix.net/40ae3951f39151b1f98ee0850cc1d9a89ae20c51.png',
        overlayLinkUrl:
            'https://fd.nl/economie-politiek/1345422/lockdown-leidt-tot-recordstijging-aantal-ww-uitkeringen-in-april',
        date: '24 februari 2021',
        duration: '24 min.',
        footerText: 'Zorg voor mensen in de zorg',
        footerUrl: '/zorg-voor-mensen-in-de-zorg',
        madePossibleBy: 'Brainnet',
        madePossibleLink: 'https://www.brainnet.nl',
    },
];

export const metaTitle = 'Vertical Card 1';
export const metaDescription = 'Vertical Card 1';

function Page() {
    const [playing, setPlaying] = useState(false);

    function togglePlay() {
        setPlaying((playState) => !playState);
    }

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
                previewClassName={styles.horizontalFlexPreview}
                anchor="vertical1"
                cssClassNames={getCssClassNames()}
                legend="Vertical Card 1"
                reactComponentName="VerticalCard1"
                description={
                    <>
                        <p>Used on ...</p>
                        <ul>
                            <li>default</li>
                        </ul>
                    </>
                }
            >
                <>
                    <VerticalCard1
                        {...verticalCards1[0]}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                </>
            </Explain>

            <Explain
                previewClassName={styles.horizontalFlexPreview}
                anchor="vertical1-next-link"
                cssClassNames={getCssClassNames()}
                legend="Vertical Card 1 next/link"
                reactComponentName="VerticalCard1"
                description={
                    <>
                        <p>Used on ...</p>
                        <ul>
                            <li>next/link</li>
                        </ul>
                    </>
                }
            >
                <>
                    <VerticalCard1
                        {...verticalCards1[0]}
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
