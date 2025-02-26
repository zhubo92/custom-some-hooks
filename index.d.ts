import type {App} from "vue";

declare const useResize: {
    (el: HTMLElement, cb: Function): void;
    install: (app: App) => void;
}

declare global {
    interface HTMLElement {
        _resizeDisconnect?: () => void;
    }
}
