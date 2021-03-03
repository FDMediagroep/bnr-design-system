/**
 * Helper for JSON.stringify to handle circular references.
 */
export declare const getCircularReplacer: () => (key: any, value: any) => any;
