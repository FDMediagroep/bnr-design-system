declare type RequestType = 'json' | 'jsonp';
/**
 * For filling placeholder elements with oEmbed content.
 */
export declare class OEmbedLoader {
    constructor(cssSelector: any, requestType: RequestType, baseUrl: any);
    /**
     * Run the <script src=<url>/> elements.
     * @param element
     */
    runScripts(element: any): void;
    getHtml(url: any): Promise<any>;
    getHtmlFromJsonp(url: any): Promise<any>;
}
export {};
