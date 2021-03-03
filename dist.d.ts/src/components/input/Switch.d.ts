/// <reference types="react" />
export interface Props {
    /**
     * Optional class name(s). Space delimited.
     */
    className?: string;
    /**
     * Optional defaultChecked property is to set the initial state of the switch. Default is false.
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
     * Optional name is used as name of the input field. When omitted the id is used instead.
     */
    name?: string;
    /**
     * Optional value of the input field. Default is 1.
     */
    value?: string;
    [x: string]: any;
}
declare function Switch(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { Switch, getCssClassNames };
