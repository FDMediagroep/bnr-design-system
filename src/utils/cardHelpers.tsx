import { LinkProps } from 'next/link';
import React from 'react';

/**
 *
 * @param href
 * @param child JSX.Element
 * @param Link next/link
 * @returns
 */
export function wrapWithAnchor(
    href: string,
    child: JSX.Element,
    Link?: (
        props: React.PropsWithChildren<LinkProps>
    ) => React.DetailedReactHTMLElement<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLElement
    >
) {
    if (Link) {
        return <Link href={href}>{child}</Link>;
    } else {
        return React.cloneElement(child, { href });
    }
}
