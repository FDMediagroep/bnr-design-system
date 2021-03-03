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
 * Render a default button.
 * @param props
 */
declare function ButtonGhost(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { ButtonGhost, getCssClassNames };
