import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs'
    },
    external: [
        'react',
        'prop-types',
    ],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs(),
        // scss({
        //   output: true
        // }),
        postcss(),
    ],
};