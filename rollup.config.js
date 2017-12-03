import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/gj-batched-repeatable.js',
        format: 'umd',
    },
    name: 'gj-batched-repeatable',
    plugins: [
        typescript(),
    ],
    external: [
        'angular',
    ],
    globals: {
        angular: 'angular'
    },
}