import type {App, DirectiveBinding} from "vue";

// intersectionObserver 监听 DOM 是否在视口之内的
// MutationObserver 监听 DOM 变化
// ResizeObserver 监听 DOM 大小变化
export function useResize(el: HTMLElement, cb: (rect: DOMRectReadOnly) => void) {
    const resizeObserver = new ResizeObserver((entries) => {
        cb(entries[0].contentRect);
    });
    resizeObserver.observe(el);

    // 返回针对单个元素的清理函数
    return () => {
        resizeObserver.unobserve(el);
    };
}

// 注册指令
// v-resize="cb"
const install = (app: App) => {
    app.directive("resize", {
        mounted(el: HTMLElement, binding: DirectiveBinding<(rect: DOMRectReadOnly) => void>) {
            // 将清理函数存储在元素对象上
            el._resizeDisconnect = useResize(el, binding.value);
        },
        unmounted(el: HTMLElement) {
            if(el._resizeDisconnect) {
                el._resizeDisconnect();
                delete el._resizeDisconnect;
            }
        }
    });
}

useResize.install = install;
