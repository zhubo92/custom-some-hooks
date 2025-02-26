import {defineConfig} from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts",
            name: "useResize",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    useResize: "useResize", // umd: amd cmd cjs require(xxx);  <script src=xxx></script>  esm: import xxx from xxx;
                }
            }
        }
    }
});
