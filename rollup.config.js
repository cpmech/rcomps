import typescript from 'rollup-plugin-typescript2';

const cacheRoot = '/tmp/rollup_typescript_cache';

const config = ['cjs', 'esm'].map(format => {
  return {
    input: {
      index: 'src/components/index.ts',
    },
    output: [
      {
        dir: `dist/${format}`,
        format,
      },
    ],
    external: ['react', '@emotion/core', '@cpmech/react-icons', 'react-responsive'],
    plugins: [
      typescript({
        cacheRoot,
        typescript: require('typescript'),
        tsconfigOverride: { compilerOptions: { declaration: format === 'esm' } },
      }),
    ],
  };
});

export default config;
