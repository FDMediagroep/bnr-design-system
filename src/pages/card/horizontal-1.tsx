import React, { useState } from 'react';
import { Explain } from '../../components/Explain';
import {
    HorizontalCard1,
    getCssClassNames,
} from '../../components/card/HorizontalCard1';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const horizontalCards1: any = [
    {
        id: '1343811',
        href: 'https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58',
        imageUrl:
            'https://bnr-external-prod.imgix.net/1U0052_voZpwotYhX7JKD2xlSy4.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&w=300&q=75',
        label: 'Energie',
        time: '08:10',
        title: 'Omzet Alfen stijgt in eerste coronakwartaal met 58%',
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
    {
        id: '1343728',
        href: 'https://fd.nl/ondernemen/1343728/staalfabrikant-aperam-verwacht-forse-daling-verkopen',
        imageUrl:
            'https://bnr-external-prod.imgix.net/1U0052_voZpwotYhX7JKD2xlSy4.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&w=300&q=75',
        label: 'Industrie',
        time: '07:49',
        title: 'Staalfabrikant Aperam verwacht forse daling verkopen',
        updated: true,
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
    {
        id: '1343728',
        href: 'https://fd.nl/economie-politiek/1343620/leraren-hebben-straks-geen-klassen-van-32-leerlingen-meer',
        imageUrl:
            'https://bnr-external-prod.imgix.net/1U0052_voZpwotYhX7JKD2xlSy4.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&w=300&q=75',
        label: 'Coronakronieken',
        time: '07:18',
        title: "'Leraren hebben straks geen klassen van 32 leerlingen meer'",
        isRead: true,
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
    {
        id: '1343728',
        href: 'https://fd.nl/economie-politiek/1343620/leraren-hebben-straks-geen-klassen-van-32-leerlingen-meer',
        imageUrl:
            'https://bnr-external-prod.imgix.net/1U0052_voZpwotYhX7JKD2xlSy4.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&w=300&q=75',
        label: 'Coronakronieken',
        time: '07:18',
        title: "'Leraren hebben straks geen klassen van 32 leerlingen meer'",
        updated: true,
        isRead: true,
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
    {
        id: '1334870',
        href: 'http://local.fd.nl:8888/opinie/1334870/een-europese-rente',
        imageUrl:
            'https://bnr-external-prod.imgix.net/1U0052_voZpwotYhX7JKD2xlSy4.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&w=300&q=75',
        label: 'Kleintje groot',
        time: '1 aug',
        title: 'Eén Europese rente',
        variant: 'variant-1',
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
    {
        id: '1353344',
        href: 'https://fd.nl/economie-politiek/1353344/huiseigenaren-minder-bezorgd-over-kanteling-op-woningmarkt',
        label: 'Woningmarkt',
        time: '6 aug',
        title: 'Huiseigenaren minder bezorgd over kanteling op woningmarkt',
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
    {
        id: '1343811',
        href: 'https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58',
        imageUrl:
            'https://bnr-external-prod.imgix.net/1U0052_voZpwotYhX7JKD2xlSy4.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&w=300&q=75',
        title: 'Omzet Alfen stijgt in eerste coronakwartaal met 58%',
        intro: 'Intro tekst komt hier te staan en kan een heel stuk langer zijn dan de titel. Maar dat zou geen probleem moeten zijn en de leesbaarheid van de cards niet ten nadele moeten beinvloeden.',
    },
];

export const metaTitle = 'Horizontal Card 1';
export const metaDescription =
    'Horizontal Card 1, used on category, dossier pages';

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
                anchor="horizontal1"
                cssClassNames={getCssClassNames()}
                legend="Horizontal Card 1"
                reactComponentName="HorizontalCard1"
                description={
                    <>
                        <p>Used on category, dossier pages.</p>
                        <ul>
                            <li>default</li>
                            <li>updated</li>
                            <li>visited</li>
                            <li>updated visited</li>
                            <li>variant-1</li>
                            <li>no image</li>
                            <li>no meta data</li>
                        </ul>
                    </>
                }
            >
                <>
                    <HorizontalCard1
                        {...horizontalCards1[0]}
                        imageComponent={
                            <Image
                                src={horizontalCards1[0].imageUrl}
                                alt={horizontalCards1[0].title}
                                layout="fill"
                                objectFit="cover"
                            />
                        }
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                    <HorizontalCard1
                        {...horizontalCards1[1]}
                        imageComponent={
                            <Image
                                src={horizontalCards1[1].imageUrl}
                                alt={horizontalCards1[1].title}
                                layout="fill"
                                objectFit="cover"
                            />
                        }
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                    <HorizontalCard1
                        {...horizontalCards1[2]}
                        imageComponent={
                            <Image
                                src={horizontalCards1[2].imageUrl}
                                alt={horizontalCards1[2].title}
                                layout="fill"
                                objectFit="cover"
                            />
                        }
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                    <HorizontalCard1
                        {...horizontalCards1[3]}
                        imageComponent={
                            <Image
                                src={horizontalCards1[3].imageUrl}
                                alt={horizontalCards1[3].title}
                                layout="fill"
                                objectFit="cover"
                            />
                        }
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                    <HorizontalCard1
                        {...horizontalCards1[4]}
                        imageComponent={
                            <Image
                                src={horizontalCards1[4].imageUrl}
                                alt={horizontalCards1[4].title}
                                layout="fill"
                                objectFit="cover"
                            />
                        }
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                    <HorizontalCard1
                        {...horizontalCards1[5]}
                        Link={Link}
                        onButtonClick={togglePlay}
                        isPlaying={playing}
                    />
                    <HorizontalCard1
                        {...horizontalCards1[6]}
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
