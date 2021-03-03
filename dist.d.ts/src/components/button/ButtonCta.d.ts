/// <reference types="react" />
declare type Sizes = 's' | 'm';
interface Props {
    className?: string;
    /**
     * Button sizes. [default: s]
     */
    size?: Sizes;
    [x: string]: any;
}
/**
 * Render a call-to-action button which is more prominent than the default button.
 * @param props
 */
declare function ButtonCta(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { ButtonCta, getCssClassNames };
