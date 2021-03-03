import React, { useEffect, useState } from 'react';
import '../design-tokens/design-tokens.scss';
import './_app.scss';
import '../../public/assets/fonts/fonts.css';
import './_app_markdown.scss';
import './_app_a11y-dark.scss';
import '@fdmg/design-system/components/card/HorizontalCard3.css';
import styles from './_app.module.scss';
import PageStore, { Page } from '../stores/PageStore';
import Head from 'next/head';
import { Tooltip } from '../components/Tooltip';
import { Menu } from '../components/menu/Menu';
import { BNRIcon, SpyglassIcon } from '../design-tokens/icons';
import { ButtonCta } from '../components/button/ButtonCta';
import { Themes } from '../components/Themes';
import Link from 'next/link';
import { debounce } from '../utils/debounce';
import { handleSearchSubmit } from '../utils/search';

/**
 * Make sibling elements same height as its tallest sibling with the given CSS Class Name.
 */

function resizeSiblings(cssClassName: string) {
    console.debug('resizeSiblings');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            let siblingHeight = 0;
            const siblings: HTMLElement[] = [];
            [].slice.call(el.parentElement.childNodes).forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    siblingHeight = Math.max(
                        siblingHeight,
                        child.getBoundingClientRect().height
                    );
                    siblings.push(child);
                }
            });
            siblings.forEach((child) => {
                if (child.classList.contains(cssClassName)) {
                    child.style.height = `${siblingHeight}px`;
                }
            });
        });
}

function handleIE11FullHeight(cssClassName: string) {
    console.debug('handleIE11FullHeight');
    [].slice
        .call(document.querySelectorAll(`.${cssClassName}`))
        .forEach((el: HTMLElement) => {
            el.style.height = 'auto';
        });
    debounce(resizeSiblings.bind(null, cssClassName), 300);
}

function isIE() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11

    return msie > 0 || trident > 0;
}

function App({ Component, pageProps }) {
    const [pageType, setPageType] = useState<Page>(PageStore.getPageType());
    const [pageStyle, setPageStyle] = useState(styles.overview);
    const darkModeMediaQuery =
        typeof window !== 'undefined'
            ? window?.matchMedia('(prefers-color-scheme: dark)')
            : { matches: false };
    if (darkModeMediaQuery.matches) {
        console.log(`System is 🌒`);
    } else {
        console.log(`System is ☀️`);
    }

    useEffect(() => {
        if (isIE()) {
            require('@webcomponents/webcomponentsjs');

            window.addEventListener(
                'resize',
                debounce.bind(
                    null,
                    () => handleIE11FullHeight('ie-full-height'),
                    300
                )
            );
            handleIE11FullHeight('ie-full-height');
        }

        const subscriptionId = PageStore.subscribe(() => {
            setPageType(PageStore.getPageType());
        });
        setPageType(PageStore.getPageType());

        return () => {
            PageStore.unsubscribe(subscriptionId);
        };
    }, []);

    useEffect(() => {
        switch (pageType) {
            case 'article':
                setPageStyle(styles.article);
                break;
            case 'overview':
            default:
                setPageStyle(styles.overview);
        }
    }, [pageType]);

    const handleSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setTimeout(() => {
            target.value = '';
        }, 300);
    };

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
            </Head>

            <Menu
                className={styles.menu}
                ariaLabel="Main menu"
                menuItems={[
                    {
                        component: (
                            <Link href="/">
                                <a style={{ padding: '0' }}>
                                    <span
                                        className={styles.logo}
                                        dangerouslySetInnerHTML={{
                                            __html: BNRIcon,
                                        }}
                                        aria-label="BNR Design System"
                                    />
                                </a>
                            </Link>
                        ),
                    },
                    {
                        text: 'Main',
                        isToggle: true,
                        menuItems: [
                            {
                                component: (
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/tokens">
                                        <a>Design Tokens</a>
                                    </Link>
                                ),
                            },
                        ],
                    },
                    {
                        text: 'Controls',
                        isToggle: true,
                        menuItems: [
                            {
                                component: (
                                    <Link href="/button/default">
                                        <a>Button</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/button/cta">
                                        <a>Button CTA</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/button/follow">
                                        <a>Button Follow</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/button/ghost">
                                        <a>Ghost Button</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/checkbox">
                                        <a>Checkbox</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/dateinput">
                                        <a>Date</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/emailinput">
                                        <a>E-mail</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/mobileinput">
                                        <a>Mobile (tel)</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/radio">
                                        <a>Radio</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/select">
                                        <a>Select</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/switch">
                                        <a>Switch</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/textarea">
                                        <a>TextArea</a>
                                    </Link>
                                ),
                            },
                            {
                                component: (
                                    <Link href="/input/textinput">
                                        <a>Text</a>
                                    </Link>
                                ),
                            },
                        ],
                    },
                    {
                        text: 'Misc.',
                        isToggle: true,
                        menuItems: [
                            {
                                component: (
                                    <Link href="/grid">
                                        <a>Grid</a>
                                    </Link>
                                ),
                            },
                            {
                                text: 'Typography',
                                isToggle: true,
                                menuItems: [
                                    {
                                        component: (
                                            <Link href="/typography">
                                                <a>Demo</a>
                                            </Link>
                                        ),
                                    },
                                ],
                            },
                        ],
                    },
                ]}
                moreMenuItems={[
                    {
                        text: 'About',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'GitHub',
                                component: (
                                    <a
                                        href="https://github.com/FDMediagroep/fd-design-system"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.invertable} ${styles.github}`}
                                        title="Open GitHub"
                                    >
                                        <figure>
                                            <picture>
                                                <source
                                                    media="(max-width: 640px)"
                                                    srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x`}
                                                />
                                                <source
                                                    media="(min-width:641px)"
                                                    srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x, /assets/github/GitHub-Mark-120px-plus.png 3x`}
                                                />
                                                <img
                                                    alt="GitHub"
                                                    src={`/assets/github/GitHub-Mark-32px.png`}
                                                />
                                            </picture>
                                            <figcaption>GitHub</figcaption>
                                        </figure>
                                    </a>
                                ),
                            },
                            {
                                text: 'Themes',
                                component: (
                                    <Themes
                                        className={styles.themes}
                                        groupName="sub-menu-themes"
                                    />
                                ),
                            },
                        ],
                    },
                    {
                        text: '',
                        className: styles.showForMobile,
                        component: (
                            <ButtonCta
                                aria-label="Dummy button"
                                title="Dummy button"
                            >
                                Abonneren
                            </ButtonCta>
                        ),
                    },
                ]}
            >
                <>
                    <form
                        method="GET"
                        action="/search"
                        onSubmit={handleSearchSubmit}
                    >
                        <div className={styles.search}>
                            <input
                                name="q"
                                placeholder="Search..."
                                onBlur={handleSearchBlur}
                                aria-label="Search text"
                            />
                            <button
                                type="submit"
                                name="search"
                                dangerouslySetInnerHTML={{
                                    __html: SpyglassIcon,
                                }}
                                aria-label="Search submit"
                            />
                        </div>
                    </form>
                    <ButtonCta
                        className={styles.customButton}
                        aria-label="Dummy button"
                        title="Dummy button"
                    >
                        Abonneren
                    </ButtonCta>
                </>
            </Menu>

            <section className={pageStyle}>
                <main>
                    <Component {...pageProps} />
                </main>
                <Tooltip />
            </section>
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric);
}

export default App;
