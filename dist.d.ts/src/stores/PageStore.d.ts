import { ReSubstitute } from '../utils/ReSubstitute';
export declare type Page = 'overview' | 'article';
declare class PageStore extends ReSubstitute {
    private _pageType;
    setPageType(pageType: Page): void;
    getPageType(): Page;
}
declare const _default: PageStore;
export default _default;
