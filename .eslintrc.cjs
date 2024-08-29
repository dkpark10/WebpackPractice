module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  /** @desc plugin은 rule들의 집합 사용하려면 명시하고 rule의 설정해야 해야 함 */
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  /** @desc 해당 설정들을 상속받아 바로 사용 가능 */
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  rules: {
    // 'no-primitive-generic-type': ['error'],
    'no-console': ['error'],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],

    'react/hook-use-state': ['error'],

    'react/require-default-props': ['off'],

    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //   },
    // ],
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', '@types'],
      },
    },
  },
};
