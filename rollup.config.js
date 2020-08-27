// rollup.config.js
import { version } from './package.json'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default {
    input: 'index.js',
    output: {
        file: `dist/toolList-${version}.js`,
        format: 'cjs'
    },
    plugins: [
        json(),
        nodeResolve(),
        commonjs(),
        babel({ 
            babelHelpers: 'bundled',
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
}