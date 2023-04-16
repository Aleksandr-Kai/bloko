const layout = require("./layout");

const testCases = [
	{
		num: 1,
		blocks: [
			{
				id: 738,
				form: [
					[1, 0],
					[1, 1],
				],
			},
			{
				id: 841,
				form: [
					[1, 1],
					[0, 1],
				],
			},
		],
		result: [
			{
				blockId: 738,
				position: 1,
				isRotated: false,
			},
			{
				blockId: 841,
				position: 2,
				isRotated: false,
			},
		],
	},
	{
		num: 2,
		blocks: [
			{
				id: 443,
				form: [
					[1, 0, 1],
					[1, 1, 1],
				],
			},
			{
				id: 327,
				form: [
					[0, 1, 0],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 0],
					[0, 1, 0],
				],
			},
			{
				id: 891,
				form: [
					[0, 0, 1],
					[1, 0, 1],
					[1, 1, 1],
				],
			},
		],

		result: [
			{
				blockId: 443,
				position: 1,
				isRotated: false,
			},
			{
				blockId: 327,
				position: 2,
				isRotated: true,
			},
			{
				blockId: 891,
				position: 3,
				isRotated: true,
			},
		],
	},
	{
		num: 3,
		blocks: [
			{
				id: 4892,
				form: [
					[0, 0, 1],
					[1, 0, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
				],
			},
			{
				id: 1839,
				form: [
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 0, 0],
				],
			},
			{
				id: 8183,
				form: [
					[0, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 0],
					[0, 1, 0],
				],
			},
		],

		result: [
			{
				blockId: 4892,
				position: 1,
				isRotated: false,
			},
			{
				blockId: 8183,
				position: 2,
				isRotated: false,
			},
			{
				blockId: 1839,
				position: 3,
				isRotated: false,
			},
		],
	},
	{
		num: 4,
		blocks: [
			{
				id: 1,
				form: [
					[1, 0, 1],
					[1, 1, 1],
					[1, 1, 1],
				],
			},
			{
				id: 2,
				form: [
					[1, 0, 0],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],
				],
			},
			{
				id: 3,
				form: [
					[0, 1, 1],
					[1, 1, 1],
					[0, 1, 0],
				],
			},
		],

		result: [
			{
				blockId: 1,
				position: 1,
				isRotated: false,
			},
			{
				blockId: 3,
				position: 2,
				isRotated: false,
			},
			{
				blockId: 2,
				position: 3,
				isRotated: true,
			},
		],
	},
];

console.clear();

testCases.forEach((testCase) => {
	console.log(`TestCase ${testCase.num}`);
	console.log(`Expected: ${JSON.stringify(testCase.result)}`);

	let res = layout(testCase.blocks);

	console.log(`Actually: ${JSON.stringify(res)}`);
});
