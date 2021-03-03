/// <reference types="react" />
export interface Props {
    /**
     * Optional class name(s). Space delimited.
     */
    className?: string;
    /**
     * Optional defaultChecked property is to set the initial state of the checkbox. Default is false.
     */
    defaultChecked?: boolean;
    /**
     * Mandatory id.
     */
    id: string;
    /**
     * Optional label.
     */
    label?: string;
    /**
     * Optional name used as name for the input field. When omitted the id is used.
     */
    name?: string;
    /**
     * Optional value for the input field. Default is 1.
     */
    value?: string;
    [x: string]: any;
}
export default function Checkbox(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { Checkbox, getCssClassNames };
