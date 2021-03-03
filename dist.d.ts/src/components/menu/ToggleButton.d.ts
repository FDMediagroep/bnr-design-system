/// <reference types="react" />
import { MenuItem } from './Menu';
interface Props {
    menuItem: MenuItem;
    [x: string]: any;
}
declare function ToggleButton(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { ToggleButton, getCssClassNames };
