/**
 * Static search page.
 * The search index is hard-coded. For now it's easier than setting up a
 * search engine.
 */
import { GridContainer } from '@fdmg/css-grid/GridContainer';
import { HorizontalCard3 } from '@fdmg/design-system/components/card/HorizontalCard3';

import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import {
    metaTitle as buttonCtaTitle,
    metaDescription as buttonCtaDescription,
} from './button/cta';
import {
    metaTitle as buttonDefaultTitle,
    metaDescription as buttonDefaultDescription,
} from './button/default';
import {
    metaTitle as buttonFollowTitle,
    metaDescription as buttonFollowDescription,
} from './button/follow';
import {
    metaTitle as buttonGhostTitle,
    metaDescription as buttonGhostDescription,
} from './button/ghost';
import {
    metaTitle as gridTitle,
    metaDescription as gridDescription,
} from './grid';
import {
    metaTitle as checkboxTitle,
    metaDescription as checkboxDescription,
} from './input/checkbox';
import {
    metaTitle as dateinputTitle,
    metaDescription as dateinputDescription,
} from './input/dateinput';
import {
    metaTitle as emailinputTitle,
    metaDescription as emailinputDescription,
} from './input/emailinput';
import {
    metaTitle as mobileinputTitle,
    metaDescription as mobileinputDescription,
} from './input/mobileinput';
import {
    metaTitle as radioTitle,
    metaDescription as radioDescription,
} from './input/radio';
import {
    metaTitle as selectTitle,
    metaDescription as selectDescription,
} from './input/select';
import {
    metaTitle as switchTitle,
    metaDescription as switchDescription,
} from './input/switch';
import {
    metaTitle as textareaTitle,
    metaDescription as textareaDescription,
} from './input/textarea';
import {
    metaTitle as textinputTitle,
    metaDescription as textinputDescription,
} from './input/textinput';
import { TextInput } from '../components/input/TextInput';
import { handleSearchSubmit, interceptLinks } from '../utils/search';

import styles from './search.module.scss';

type SearchIndex = {
    [x: string]: {
        title: string;
        description: string;
    };
};

const searchIndex: SearchIndex = {
    '/button/cta': {
        title: buttonCtaTitle,
        description: buttonCtaDescription,
    },
    '/button/default': {
        title: buttonDefaultTitle,
        description: buttonDefaultDescription,
    },
    '/button/follow': {
        title: buttonFollowTitle,
        description: buttonFollowDescription,
    },
    '/button/ghost': {
        title: buttonGhostTitle,
        description: buttonGhostDescription,
    },
    '/grid': {
        title: gridTitle,
        description: gridDescription,
    },
    '/input/checkbox': {
        title: checkboxTitle,
        description: checkboxDescription,
    },
    '/input/dateinput': {
        title: dateinputTitle,
        description: dateinputDescription,
    },
    '/input/emailinput': {
        title: emailinputTitle,
        description: emailinputDescription,
    },
    '/input/mobileinput': {
        title: mobileinputTitle,
        description: mobileinputDescription,
    },
    '/input/radio': {
        title: radioTitle,
        description: radioDescription,
    },
    '/input/select': {
        title: selectTitle,
        description: selectDescription,
    },
    '/input/switch': {
        title: switchTitle,
        description: switchDescription,
    },
    '/input/textarea': {
        title: textareaTitle,
        description: textareaDescription,
    },
    '/input/textinput': {
        title: textinputTitle,
        description: textinputDescription,
    },
};

export default function page() {
    const router = useRouter();
    const searchString =
        typeof router.query.q === 'string'
            ? router.query.q.toLowerCase()
            : router.query.q?.[0].toLowerCase();
    const [results, setResults] = useState<SearchIndex[]>([]);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            interceptLinks(
                document.querySelectorAll(`.${styles.searchResults} a[href]`)
            );
        });
        observer.observe(document.querySelector(`.${styles.searchResults}`), {
            attributes: true,
            childList: true,
            subtree: true,
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const res = [];
        if (searchIndex) {
            Object.entries(searchIndex).forEach((entry) => {
                if (
                    searchString?.length &&
                    (searchString === '*' ||
                        entry[1].title.toLowerCase().indexOf(searchString) >
                            -1 ||
                        entry[1].description
                            .toLowerCase()
                            .indexOf(searchString) > -1)
                ) {
                    res.push(entry);
                }
            });
            setResults(res);
        }
    }, [searchString]);

    return (
        <section className={styles.search}>
            <Head>
                <title>Search - Design System - Het Financieele Dagblad</title>
                <meta
                    name="description"
                    content="Search components in the FD Design System"
                />
                <meta property="og:title" content="Search FD Design System" />
                <meta
                    property="og:description"
                    content="Search components in the FD Design System"
                />
                <meta
                    property="twitter:title"
                    content="Search FD Design System"
                />
                <meta
                    property="twitter:description"
                    content="Search components in the FD Design System"
                />
            </Head>

            <GridContainer
                className={styles.searchContent}
                attributes={['grid']}
            >
                <GridContainer attributes={['xs-12']}>
                    <form
                        method="GET"
                        action="/search"
                        onSubmit={handleSearchSubmit}
                    >
                        <div className={styles.searchForm}>
                            {searchString ? (
                                <TextInput
                                    key={searchString}
                                    id="searchString"
                                    className={styles.searchTextInput}
                                    label="Search"
                                    name="q"
                                    aria-label="Search text"
                                    defaultValue={searchString}
                                />
                            ) : (
                                <TextInput
                                    key="noSearchString"
                                    id="searchString"
                                    className={styles.searchTextInput}
                                    label="Search"
                                    name="q"
                                    aria-label="Search text"
                                />
                            )}
                        </div>
                    </form>
                    {results?.length ? <h2>{results.length} Results</h2> : null}
                    <div className={styles.searchResults}>
                        {results.map((result, idx) => {
                            const path = `${result[0]}`;
                            const title = result[1].title;
                            const description = result[1].description;
                            return (
                                <HorizontalCard3
                                    key={idx}
                                    id={path}
                                    title={title}
                                    intro={description}
                                    label="Component"
                                    time=""
                                    url={path}
                                />
                            );
                        })}
                    </div>
                </GridContainer>
            </GridContainer>
        </section>
    );
}
