import type {App} from "vue";

declare const useResize: {
    (el: HTMLElement, cb: (rect: DOMRectReadOnly) => void): void;
    install: (app: App) => void;
}

declare global {
    interface HTMLElement {
        _resizeDisconnect?: () => void;
    }
}
