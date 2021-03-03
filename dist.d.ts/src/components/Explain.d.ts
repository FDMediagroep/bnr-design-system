import { ReactElement } from 'react';
interface Props {
    /**
     * E.g.: component
     * If you want to use # anchors in the URL to jump to the position of this component on the page.
     * You can provide the anchor name here excluding the #.
     */
    anchor?: string;
    /**
     * Background color for JSFiddle or Codepen.
     */
    bgcolor?: string;
    /**
     * The root CSS class name of the component (without preceding dot).
     * All styles with this class name will be aggregated for the code-view.
     * Also accepts an array of class names.
     */
    cssClassNames: string[];
    /**
     * Hide CSS code panel.
     */
    hideCSS?: boolean;
    /**
     * Hide HTML code panel.
     */
    hideHTML?: boolean;
    /**
     * Hide the preview pane.
     */
    hidePreview?: boolean;
    /**
     * Hide buttons to external code editors like: CodePen and JSFiddle.
     */
    hideExternalCodeEditors?: boolean;
    /**
     * Hide React code panel.
     */
    hideReact?: boolean;
    /**
     * Default: column
     */
    previewFlexDirection?: 'column' | 'row';
    /**
     * Default: undefined
     */
    previewClassName?: string;
    /**
     * Description of the component.
     */
    description?: ReactElement;
    /**
     * The component to be rendered in the preview. The resulting HTML of the component is used for the code-view.
     */
    children: ReactElement;
    /**
     * External JavaScript to be loaded on JSFiddle and Codepen.
     */
    js_external?: string;
    /**
     * Title for this Explain component.
     */
    legend: string;
    /**
     * React component name.
     * In the production build the component name is minified.
     * Set this property to use this as the component name instead.
     */
    reactComponentName?: string;
}
declare function Explain(props: Props): JSX.Element;
export { Explain };
