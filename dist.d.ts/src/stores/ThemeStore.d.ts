import { ReSubstitute } from '../utils/ReSubstitute';
export declare enum Theme {
    SYSTEM = "system",
    DARK = "dark",
    LIGHT = "light"
}
declare class ThemeStore extends ReSubstitute {
    private _theme;
    setTheme(theme: Theme): void;
    getTheme(): Theme;
}
declare const _default: ThemeStore;
export default _default;
