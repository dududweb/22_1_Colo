import { atom } from 'recoil';

export const textState = atom({
	key: 'textState', // unique ID (with respect to other atoms/selectors)
	default: '', // default value (aka initial value)
});

export const filteredReleaseData = atom({
	key: 'filteredReleaseData', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
});

export const filterListState = atom({
	key: 'filterListState',
	default: {},
});
