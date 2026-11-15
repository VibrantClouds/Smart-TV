// Throwaway file for a fork CI test, not for merging.
export const describeCount = (count) => {
	if (count === 0) {
		return 'none';
	}
	if (count === 1) {
		return 'one';
	}
	const label = `${count} items`;
	return label;
};
