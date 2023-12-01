import * as esbuild from 'esbuild'

await esbuild.build({
    stdin: {
        contents: `
  export {md2HTML} from "@ed-components/ed-components/common.js";
`,

        // These are all optional:
        resolveDir: './',
        // sourcefile: 'imaginary-file.js',
        // loader: 'ts',
    },
    bundle: true,
    platform: 'node',
    target: ['node18'],
    outfile: './scripts/build/md2HTML.cjs'
})
