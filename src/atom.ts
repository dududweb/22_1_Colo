import { atom } from 'recoil';

export const textState = atom({
	key: 'textState', // unique ID (with respect to other atoms/selectors)
	default: '', // default value (aka initial value)
});

export const filteredReleaseData = atom({
	key: 'filteredReleaseData', // unique ID (with respect to other atoms/selectors)
	default: { stratDate: '', endDate: '', release_status: '', release_type: '' }, // default value (aka initial value)
});

export const orderfilteredData = atom({
	key: 'orderfilteredData', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
});
