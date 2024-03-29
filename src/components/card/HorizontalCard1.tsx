import { LinkProps } from 'next/link';
import React from 'react';
import { wrapWithAnchor } from '../../utils/cardHelpers';
import { ButtonPlay } from '../button/ButtonPlay';
import styles from './HorizontalCard1.module.scss';

interface Props {
    id: string;
    href: string;
    imageUrl?: string;
    /**
     * Custom image component. When set this will replace the default img-element.
     */
    imageComponent?: JSX.Element;
    intro?: string;
    /**
     * Show play or pause icon.
     */
    isPlaying?: boolean;
    label?: string;
    /**
     * Link element e.g.: next/link
     * If nothing is passed then a regular HTMLAnchorElement is used.
     */
    Link?: (
        props: React.PropsWithChildren<LinkProps>
    ) => React.DetailedReactHTMLElement<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLElement
    >;
    /**
     * Handle play/pause click.
     */
    onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    time?: string;
    title: string;
    isRead?: boolean;
    updated?: boolean;
    variant?: 'variant-1';
    [x: string]: any;
}

/**
 * Used on category, dossier pages.
 * @param props
 */
function HorizontalCard1(props: Props) {
    return (
        <article
            style={props.style}
            className={`${styles.horizontalCard1}${
                props.isRead ? ` ${styles.isRead}` : ''
            }${props.variant === 'variant-1' ? ` ${styles.longread}` : ''}`}
            id={props.id}
        >
            {wrapWithAnchor(
                props.href,
                <a aria-label={props.title}>
                    {(props.imageUrl || props.imageComponent) && (
                        <figure>
                            <picture>
                                {props.imageComponent ?? (
                                    <img
                                        src={`${props.imageUrl}`}
                                        alt={props.caption ?? props.title}
                                    />
                                )}
                            </picture>
                            <figcaption className="body-text sans xs">
                                {props.caption}
                            </figcaption>
                            {props?.onButtonClick && (
                                <ButtonPlay
                                    className={styles.playButton}
                                    onClick={props.onButtonClick}
                                    isPlaying={props.isPlaying}
                                />
                            )}
                        </figure>
                    )}

                    {!props.imageUrl && !props.imageComponent && (
                        <div className={`${styles.figure} ${styles.empty}`}>
                            <img src="/assets/images/logo.svg" alt="FD-Logo" />
                        </div>
                    )}

                    <div className={styles.teaserText}>
                        {props.updated || props.label || props.time ? (
                            <div className={styles.meta}>
                                {props.updated && (
                                    <span
                                        className={`${styles.update} body-text sans bold xs`}
                                    >
                                        Update
                                    </span>
                                )}
                                {!props.updated && props.label ? (
                                    <span
                                        className={`${styles.prefix} body-text sans bold xs`}
                                    >
                                        {props.label}
                                    </span>
                                ) : null}

                                {props.time ? (
                                    <time className="body-text sans bold xs">
                                        {props.time}
                                    </time>
                                ) : null}
                            </div>
                        ) : null}

                        <div className={styles.textContainer}>
                            <h1 className="heading sans s">{props.title}</h1>
                            {props.intro ? (
                                <p className="body-text sans s">
                                    {props.intro}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </a>,
                props.Link
            )}
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.horizontalCard1];
}

export { HorizontalCard1, getCssClassNames };
