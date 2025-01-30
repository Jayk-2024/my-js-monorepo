import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/javascript'], // Keep only JavaScript configuration
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.js', '**/*.jsx'], // Only JavaScript and JSX files
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.cjs'], // Only JavaScript, JSX, and CJS files
    rules: {},
  },
];
