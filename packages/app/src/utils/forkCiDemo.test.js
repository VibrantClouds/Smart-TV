import {describeCount} from './forkCiDemo';

describe('describeCount', () => {
	it('says none for zero', () => {
		expect(describeCount(0)).toBe('none');
	});
});
