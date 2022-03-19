// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};
declare global {
    interface Window {
        __remotes__: Record<string, string>;
    }

    const __webpack_init_sharing__: any;
    const __webpack_share_scopes__: any;
}