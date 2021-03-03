declare type KeyOrKeys = string | string[];
declare type Callback = (keys?: string[]) => void;
/**
 * Drop-in minimal replacement for microsoft/ReSub.
 * Only implements the Pub/Sub functionality of ReSub.
 * Disregarded the framework specific implementations.
 */
export declare class ReSubstitute {
    private subscriptions;
    private static pendingCallbacks;
    private throttleMs;
    private bypassTriggerBlocks;
    private static triggerBlockCount;
    constructor(throttleMs?: number, bypassTriggerBlocks?: boolean);
    private static resolveCallbacks;
    /**
     * Subscribe to store triggers.
     * @param callback
     * @param key limit only to events for this key
     */
    subscribe(callback: Callback, key?: string): number;
    /**
     * Unsubscribe from the store so future triggers will not trigger the callback anymore.
     * @param subToken
     */
    unsubscribe(subToken: number): void;
    protected _getSubscriptionKeys(): string[];
    protected _isTrackingKey(key: string): boolean;
    /**
     * Trigger callbacks of subscriptions.
     * @param keyOrKeys trigger callback if subscription matches given key or keys.
     */
    trigger(keyOrKeys?: KeyOrKeys): void;
    /**
     * Block callback triggers globally.
     */
    static pushTriggerBlock(): void;
    /**
     * Pop trigger block. When no trigger blocks are left. The callback triggering will resume.
     * If no trigger blocks are set then this function does nothing.
     */
    static popTriggerBlock(): void;
}
export {};
