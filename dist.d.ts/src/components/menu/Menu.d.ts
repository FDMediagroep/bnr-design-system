/// <reference types="react" />
export interface MenuItem {
    /**
     * This ID is auto-generated. No need to pass this along.
     */
    id?: string;
    /**
     * Set to true if the menu has sub-menu items and it should be initially be opened.
     */
    expanded?: boolean;
    /**
     * ARIA-label of the menu item.
     */
    ariaLabel?: string;
    /**
     * Visible text of the menu item.
     */
    text?: string;
    /**
     * Custom component as menu-item.
     * Setting this will override the linkText.
     */
    component?: JSX.Element | JSX.Element[];
    /**
     * Is a toggle only. Setting this to true will render this menu
     * item as a button whose function is to toggle the sub-menu.
     */
    isToggle?: boolean;
    /**
     * Link where the menu item should navigate to.
     */
    href?: string;
    /**
     * Link relationship.
     * e.g.: noopener noreferrer nofollow
     */
    rel?: string;
    /**
     * target window.
     */
    target?: string;
    /**
     * Sub-menu items.
     */
    menuItems?: MenuItem[];
    [x: string]: any;
}
interface Props {
    /**
     * ARIA-label of the menu.
     */
    ariaLabel: string;
    /**
     * Class name for the centered part of the menu items container.
     */
    contentClassName?: string;
    /**
     * Menu items. Use a nested structure to create sub-menus.
     */
    menuItems?: MenuItem[];
    /**
     * Menu items shown under the More sub-menu.
     */
    moreMenuItems?: MenuItem[];
    /**
     * Label of the `More` menu-item.
     * Default: More
     */
    moreLabel?: string;
    [x: string]: any;
}
declare function Menu(props: Props): JSX.Element;
declare function getCssClassNames(): string[];
export { Menu, getCssClassNames };
