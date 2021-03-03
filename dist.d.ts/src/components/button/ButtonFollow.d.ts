/// <reference types="react" />
interface Props {
    className?: string;
    addUrl?: string;
    removeUrl?: string;
    selected?: boolean;
    tag: string;
    addText?: string;
    removeText?: string;
    /**
     * variant-1: persoonlijk
     */
    variant?: 'variant-1';
    [x: string]: any;
}
/**
 * Render a follow button which is basically a toggle-button.
 * @param props
 */
declare function ButtonFollow(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { ButtonFollow, getCssClassNames };
