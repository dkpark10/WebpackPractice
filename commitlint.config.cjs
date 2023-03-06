// const commitTypes = ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refac', 'revert', 'style', 'test'];

// module.exports = {
//   rules: {
//     'type-case': [2, 'always', 'lower-case'],
//     'type-enum': [
//       2,
//       'always',
//       commitTypes.map((type) => `[${type}]`),
//     ],
//   },
//   plugins: [
//     {
//       rules: {
//         'type-enum': (parsed) => {
//           const { header } = parsed;

//           if (header[0] !== '[') {
//             return [false, '커밋 타입에 대괄호를 삽입하세요.'];
//           }

//           const indexOfcloseBrakcet = header.indexOf(']');
//           const commitType = header.slice(1, indexOfcloseBrakcet);

//           if (commitTypes.includes(commitType) === false) {
//             return [false, '올바르지 않은 커밋타입 입니다.'];
//           }

//           return [true, ''];
//         },
//       },
//     },
//   ],
// };

module.exports = { extends: ['@commitlint/config-conventional'] };
