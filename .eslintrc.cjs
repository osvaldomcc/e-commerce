module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'unused-imports'],
	overrides: [
		{
			// 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
			rules: {
				'testing-library/await-async-query': 'error',
				'testing-library/no-await-sync-query': 'error',
				'testing-library/no-debugging-utils': 'warn',
				'testing-library/no-dom-import': 'off',
			},
		},
	],
	rules: {
		'react-refresh/only-export-components': 'warn',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-multi-spaces': ['error'],
		'no-trailing-spaces': ['error'],
		'no-var': ['error'],
		'no-console': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
			},
		],
		'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'error',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
	},
};
