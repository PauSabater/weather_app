import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import terser from '@rollup/plugin-terser'
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import sourcemaps from "rollup-plugin-sourcemaps"

import packageJson from './package.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
}

export default [
  {
    input: "src/exports.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ sourceMap: true, tsconfig: "./tsconfig.json" }),
      sourcemaps(),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "src/exports.tsx",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
]