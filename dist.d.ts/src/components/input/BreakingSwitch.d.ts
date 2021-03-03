import React from 'react';
export interface Props {
    checked?: boolean;
    className?: string;
    description?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    subscribeUrl?: string;
    label?: string;
    unsubscribeUrl?: string;
}
export default function BreakingSwitch(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { BreakingSwitch, getCssClassNames };
