import React from 'react';
import styles from './VerticalCard1.module.scss';

interface Props {
    date: string;
    duration: string;
    href: string;
    madePossibleByPrefix?: string;
    madePossibleBy: string;
    madePossibleLink: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    imageUrl: string;
    footerUrl?: string;
    footerText?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    overlayImageCaption?: string;
    overlayImageUrl?: string;
    overlayLinkUrl?: string;
    [x: string]: any;
}
function VerticalCard1(props: Props) {
    return (
        <a
            href={props.href}
            className={`${styles.verticalCard1}${
                props.className ? ` ${props.className}` : ''
            }`}
            id={props.id}
            aria-label={props.title}
        >
            <article>
                <figure>
                    <picture>
                        {props.imageUrlS && (
                            <source
                                media="(max-width:639px)"
                                srcSet={`${props.imageUrlS}`}
                            />
                        )}
                        {props.imageUrlM && (
                            <source
                                media="(max-width:860px)"
                                srcSet={`${props.imageUrlM}`}
                            />
                        )}
                        {props.imageUrlL && (
                            <source
                                media="(min-width:861px)"
                                srcSet={`${props.imageUrlL}`}
                            />
                        )}
                        <img
                            src={`${props.imageUrl}`}
                            alt={props.caption ?? props.title}
                        />
                    </picture>
                    <figcaption>
                        <h2 className="heading sans s">{props.title}</h2>

                        <div
                            className={`${styles.madePossibleBy} body-text sans s`}
                        >
                            <span>
                                {props.madePossibleByPrefix ??
                                    'Een podcast van'}
                            </span>{' '}
                            <a href={props.madePossibleLink}>
                                {props.madePossibleBy}
                            </a>
                        </div>
                    </figcaption>
                </figure>

                <section className={styles.meta}>
                    <section className="body-text sans xs">
                        <time>{props.date}</time>
                        <span className={styles.dot} />
                        <time>{props.duration}</time>
                    </section>
                    <button onClick={props.onClick}>Play</button>
                </section>

                {props.footerText ? (
                    <footer className="body-text sans bold xs">
                        <a href={props.footerUrl}>{props.footerText}</a>
                    </footer>
                ) : null}

                {props.overlayImageUrl && (
                    <div className={styles.overlay}>
                        {props.overlayImageUrl && props.overlayLinkUrl ? (
                            <a href={props.overlayLinkUrl}>
                                <figure>
                                    <img
                                        className={`${styles.image} logo`}
                                        alt={
                                            props.overlayImageCaption
                                                ? props.overlayImageCaption
                                                : 'no overlay image caption provided'
                                        }
                                        src={
                                            props.overlayImageUrl
                                                ? props.overlayImageUrl
                                                : '#'
                                        }
                                    />
                                </figure>
                            </a>
                        ) : null}
                    </div>
                )}
            </article>
        </a>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard1];
}

export { VerticalCard1, getCssClassNames };
