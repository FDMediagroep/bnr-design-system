import { LinkProps } from 'next/link';
import React from 'react';
import { wrapWithAnchor } from '../../utils/cardHelpers';
import styles from './VerticalCard1.module.scss';

interface CardProps {
    href: string;
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
    title: string;
    [x: string]: any;
}

interface PictureProps extends CardProps {
    caption?: string;
    imageUrlS?: string;
    imageUrlM?: string;
    imageUrlL?: string;
    imageUrl: string;
}

interface FigCaptionProps extends CardProps {
    madePossibleByPrefix?: string;
    madePossibleBy: string;
    madePossibleLink: string;
}

interface MetaProps extends CardProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface Props extends CardProps, PictureProps, FigCaptionProps, MetaProps {
    date: string;
    duration: string;
    footerUrl?: string;
    footerText?: string;
    overlayImageCaption?: string;
    overlayImageUrl?: string;
    overlayLinkUrl?: string;
}

function Picture(props: PictureProps) {
    return (
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
            <img src={`${props.imageUrl}`} alt={props.caption ?? props.title} />
        </picture>
    );
}

function FigCaption(props: FigCaptionProps) {
    return (
        <figcaption>
            <h2 className="heading sans s">{props.title}</h2>

            <div className={`${styles.madePossibleBy} body-text sans s`}>
                <span>{props.madePossibleByPrefix ?? 'Een podcast van'}</span>{' '}
                <a href={props.madePossibleLink}>{props.madePossibleBy}</a>
            </div>
        </figcaption>
    );
}

function Meta(props: MetaProps) {
    return (
        <section className={styles.meta}>
            <section className="body-text sans xs">
                <time>{props.date}</time>
                <span className={styles.dot} />
                <time>{props.duration}</time>
            </section>
            <button onClick={props.onClick}>Play</button>
        </section>
    );
}

function VerticalCard1(props: Props) {
    return (
        <article
            id={props.id}
            className={`${styles.verticalCard1}${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <figure>
                {wrapWithAnchor(
                    props.href,
                    <a>
                        <Picture {...props} />
                    </a>,
                    props.Link
                )}
                {wrapWithAnchor(
                    props.href,
                    <a>
                        <FigCaption {...props} />
                    </a>,
                    props.Link
                )}
            </figure>

            {wrapWithAnchor(
                props.href,
                <a>
                    <Meta {...props} />
                </a>,
                props.Link
            )}

            {props.footerText ? (
                <footer className="body-text sans bold xs">
                    {wrapWithAnchor(
                        props.footerUrl,
                        <a>{props.footerText}</a>,
                        props.Link
                    )}
                </footer>
            ) : null}

            {props.overlayImageUrl && (
                <div className={styles.overlay}>
                    {props.overlayImageUrl && props.overlayLinkUrl
                        ? wrapWithAnchor(
                              props.overlayLinkUrl,
                              <a>
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
                              </a>,
                              props.Link
                          )
                        : null}
                </div>
            )}
        </article>
    );
}

function getCssClassNames(): string[] {
    return [styles.verticalCard1];
}

export { VerticalCard1, getCssClassNames };
