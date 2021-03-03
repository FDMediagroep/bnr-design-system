import React from 'react';
export interface Props {
    /**
     * Mandatory id of the input element.
     */
    id: string;
    /**
     * Optional name of the input element. Id is used when name is unset.
     */
    name?: string;
    /**
     * Optional className is set as the className of the outmost container element.
     */
    className?: string;
    /**
     * Optional description is set as description text for the input field.
     * Use this to describe the purpose of the field to the user.
     */
    description?: string;
    /**
     * Optional default value of the input element.
     */
    defaultValue?: string | number;
    /**
     * Optional value of the input element.
     */
    value?: string;
    /**
     * Optional. When true the default input validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;
    /**
     * Optional. The label shown in the input field.
     */
    label?: string;
    /**
     * Optional. The native browser tooltip text shown on hover. When omitted then the label is used.
     */
    title?: string;
    /**
     * Optional. Custom error message shown when the value does fit the pattern.
     */
    errorMessage?: string;
    /**
     * Optional. Number of rows.
     */
    rows?: number;
    /**
     * Optional. Number of cols.
     */
    cols?: number;
    /**
     * Optional minimum length of the input field.
     */
    minLength?: number;
    /**
     * Optional maximum length of the input field.
     */
    maxLength?: number;
    /**
     * Optional. Maximum number of words.
     */
    maxWords?: number;
    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (value: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Optional placeholder text which is alway shown when the input value is empty. Default value is an empty space ' ' needed for specific styling hacks.
     */
    placeholder?: string;
    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;
    [x: string]: any;
}
declare function TextArea(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { TextArea, getCssClassNames };
