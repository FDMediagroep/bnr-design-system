import { ReSubstitute } from '../utils/ReSubstitute';
import { Summary } from '../components/Tooltip';
declare class TooltipStore extends ReSubstitute {
    private _summary;
    setSummary(summary: Summary): void;
    getSummary(): Summary;
}
declare const _default: TooltipStore;
export default _default;
