import { babel } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { terser } from "rollup-plugin-terser";
const config = {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/*.css', dest: 'dist' },
        { src: 'src/*.png', dest: 'dist' },
        { src: 'src/*.ico', dest: 'dist' }
      ]
    })
  ],
};

export default config;