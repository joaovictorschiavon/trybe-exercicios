const sum = require(('./sum'));

describe('Quando sum é chamado', () => {

	test('A soma de 4 e 5 é 9', () => {
		expect(sum(4,5)).toBe(9);
	});

	test('A soma de 0 e 0 é 0', () => {
		expect(sum(0,0)).toBe(0);
	});
});