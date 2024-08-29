module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'A description of my rule',
			category: 'Best Practices',
			recommended: false,
		},
		schema: [],
	},
	create(context) {
		return {
			Identifier(node) {
				// 규칙을 적용할 코드 작성
				if (node.name === 'foo') {
					context.report({
						node,
						message: 'Avoid using the identifier "foo".',
					});
				}
			},
		};
	},
};
