import type { FlatESLintConfigItem } from "eslint-define-config";
import { pluginUnicorn } from "../plugins";

export function unicorn(): FlatESLintConfigItem[] {
	return [
		{
			plugins: {
				unicorn: pluginUnicorn,
			},
			rules: {
				"unicorn/error-message": "error",
				"unicorn/escape-case": "error",
				"unicorn/no-instanceof-array": "error",
				"unicorn/no-new-buffer": "error",
				"unicorn/no-new-array": "error",
				"unicorn/no-unsafe-regex": "off",
				"unicorn/number-literal-case": "error",
				"unicorn/numeric-separators-style": "error",
				"unicorn/throw-new-error": "error",
				"unicorn/no-useless-spread": "error",
				"unicorn/relative-url-style": ["error", "always"],
				"unicorn/explicit-length-check": "error",
				"unicorn/new-for-builtins": "error",
				"unicorn/no-array-for-each": "error",
				"unicorn/no-array-method-this-argument": "error",
				"unicorn/no-for-loop": "error",
				"unicorn/no-lonely-if": "error",
				"unicorn/no-negated-condition": "error",
				"unicorn/switch-case-braces": "error",
				"unicorn/prefer-ternary": "error",
				"unicorn/prefer-query-selector": "error",
				"unicorn/prefer-modern-dom-apis": "error",
				"unicorn/prefer-modern-math-apis": "error",
				"unicorn/prefer-json-parse-buffer": "error",
				"unicorn/prefer-date-now": "error",
				"unicorn/prefer-array-some": "error",
				"unicorn/prefer-array-index-of": "error",
				"unicorn/prefer-array-flat": "error",
				"unicorn/prefer-array-find": "error",
				"unicorn/prefer-spread": "error",
				"unicorn/prefer-set-size": "error",
				"unicorn/prefer-string-slice": "error",
				"unicorn/prefer-includes": "error",
				"unicorn/prefer-string-starts-ends-with": "error",
				"unicorn/prefer-text-content": "error",
				"unicorn/prefer-type-error": "error",
				"unicorn/prefer-node-protocol": "error",
				"unicorn/prefer-regexp-test": "error",
				"unicorn/prefer-optional-catch-binding": "error",
			},
		},
	];
}
