import React, { useState } from 'react';
import { Explain } from '../../components/Explain';
import {
    ButtonPlay,
    getCssClassNames,
} from '../../components/button/ButtonPlay';
import Head from 'next/head';
import styles from './buttons.module.scss';

export const metaTitle = 'Play Button';
export const metaDescription =
    'Play Button, used to interact with the content: audio/video';

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
                previewClassName={styles.buttons}
                anchor="default"
                cssClassNames={getCssClassNames()}
                legend="Play Button (default)"
                reactComponentName="ButtonPlay"
                description={
                    <>
                        <p>Used to start media playback.</p>
                    </>
                }
            >
                <>
                    <ButtonPlay
                        id="demoPlayButton"
                        onClick={togglePlay}
                        isPlaying={playing}
                    />
                    <ButtonPlay
                        id="demoPlayButton2"
                        style={{ fontSize: '1.5rem' }}
                        onClick={togglePlay}
                        isPlaying={playing}
                    />
                </>
            </Explain>
        </>
    );
}

export default Page;
