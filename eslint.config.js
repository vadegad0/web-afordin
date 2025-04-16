import love from 'eslint-config-love'
import astro from 'eslint-plugin-astro'

export default [
  { ignores: ['dist/'] },
  ...astro.configs['flat/recommended'],
  ...astro.configs['flat/jsx-a11y-recommended'],
  {
    files: ['**/*.{js,mjs}', '**/*.ts'],
    ...love,
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/prefer-destructuring': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
