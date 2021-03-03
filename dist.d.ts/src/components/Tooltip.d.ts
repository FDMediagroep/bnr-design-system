/// <reference types="react" />
declare type Token = {
    name: string;
    rgb: string;
    hex: string;
};
export interface Summary {
    color?: Token;
    backgroundColor?: Token;
    borderTopColor?: Token;
    borderRightColor?: Token;
    borderBottomColor?: Token;
    borderLeftColor?: Token;
}
declare function Tooltip(): JSX.Element;
declare const styleProps: string[];
export { Tooltip, styleProps };
