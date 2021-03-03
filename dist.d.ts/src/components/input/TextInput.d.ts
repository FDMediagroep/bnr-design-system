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
    value?: string | number;
    /**
     * Optional. When true the default input validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;
    /**
     * Optional. The pattern to which the input value is validated. Only works when required is set to true.
     * Tip: the exported Patterns enum already contains some validation rules for common use-cases.
     */
    pattern?: Patterns | string;
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
     * Optional. Type of the input field. Default is `text`.
     */
    type?: string;
    /**
     * The min attribute specifies the minimum value for an <input> element.
     */
    min?: string;
    /**
     * The min attribute specifies the maximum value for an <input> element.
     */
    max?: string;
    /**
     * Optional minimum length of the input field.
     */
    minLength?: number;
    /**
     * Optional maximum length of the input field.
     */
    maxLength?: number;
    /**
     * Hide the number spinner arrows for number inputs.
     */
    hideNumberSpinners?: boolean;
    /**
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (value: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Optional placeholder text which is alway shown when the input value is empty. Default value is an empty space ' ' needed for specific styling hacks.
     */
    placeholder?: string;
    /**
     * Optional. Store the value to localStorage which will be used as default value upon subsequent visits of the page.
     * Tip: `id` is used as suffix for the property name.
     */
    localStorage?: boolean;
    /**
     * Misc. properties.
     */
    [x: string]: any;
}
export declare enum Patterns {
    MOBILE = "06[0-9]{8}",
    EMAIL = ".+@.+\\.[a-z]{2,3}"
}
declare function TextInput(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { TextInput, getCssClassNames };
