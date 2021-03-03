import React from 'react';
export interface Props {
    /**
     * Mandatory id of the select element.
     */
    id: string;
    /**
     * Optional name of the select element. Id is used when name is unset.
     */
    name?: string;
    /**
     * Optional className is set as the className of the outmost container element.
     */
    className?: string;
    /**
     * Optional description is set as description text for the select field.
     * Use this to describe the purpose of the field to the user.
     */
    description?: string;
    /**
     * Optional default value of the select element.
     */
    defaultValue?: string | number;
    /**
     * Optional value of the select element.
     */
    value?: string | number;
    /**
     * Optional. When true the default select validation kicks in. Tip: use in combination with pattern.
     */
    required?: boolean;
    /**
     * Optional. The label shown in the select field.
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
     * Optional callback hook triggered when a change event occured in the input field.
     */
    onChange?: (value: React.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (value: React.FocusEvent<HTMLSelectElement>) => void;
    onBlur?: (value: React.FocusEvent<HTMLSelectElement>) => void;
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
declare function Select(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { Select, getCssClassNames };
