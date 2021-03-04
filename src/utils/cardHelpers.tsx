import React from 'react';

/**
 *
 * @param href
 * @param child JSX.Element
 * @param Link
 * @returns
 */
export function wrapWithAnchor(
    href: string,
    child: JSX.Element,
    Link?: React.ElementType
) {
    if (Link) {
        return <Link href={href}>{child}</Link>;
    } else {
        return React.cloneElement(child, { href });
    }
}
