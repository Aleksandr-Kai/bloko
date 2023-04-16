module.exports = function layout(blocks) {
	let res = [];
	let pos = 1;
	let current = FindFirstBlock(blocks);
	res.push({
		blockId: current.id,
		position: pos,
		isRotated: current.isRotated,
	});
	while (blocks.length > 0) {
		current = FindNextBlock(current, blocks);
		res.push({
			blockId: current.id,
			position: ++pos,
			isRotated: current.isRotated,
		});
	}

	return res;
};

const tryFirst = (block) => {
	if (!block.form[block.form.length - 1].includes(0)) {
		block.isRotated = false;
		return block.form;
	}
	if (!block.form[0].includes(0)) {
		block.isRotated = true;
		return block.form.reverse();
	}

	return undefined;
};

const FindFirstBlock = (blocks) => {
	const index = blocks.findIndex((block) => tryFirst(block));
	return blocks.splice(index, 1)[0];
};

const calcDepth = (matrix) => {
	let depth = 0;
	for (let i = 0; i < matrix.length; i++) {
		if (!matrix[i].includes(0)) break;
		depth++;
	}
	return depth;
};

const summ = (arr1, arr2) => {
	let res = [];
	for (let i = 0; i < arr1.length; i++) res[i] = arr1[i] + arr2[i];
	return res;
};

const CanMerge = (block1, block2) => {
	const m1 = [...block1.form];
	const m2 = [...block2.form].reverse();
	const depth = calcDepth(m1);
	if (depth !== calcDepth(m2)) return false;
	for (let i = 0; i < depth; i++) {
		let sum2 = summ(m1[i], m2[depth - i - 1]);
		if (sum2.includes(2) || sum2.includes(0)) {
			return false;
		}
	}
	return true;
};

const FindNextBlock = (currentBlock, blocksList) => {
	for (let i = 0; i < blocksList.length; i++) {
		let next = JSON.parse(JSON.stringify(blocksList[i]));
		next.isRotated = false;
		if (CanMerge(currentBlock, next)) {
			blocksList.splice(i, 1);
			return next;
		}
		next.form.reverse();
		next.isRotated = true;
		if (CanMerge(currentBlock, next)) {
			blocksList.splice(i, 1);
			return next;
		}
	}
	return undefined;
};
