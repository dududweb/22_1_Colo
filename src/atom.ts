import { atom } from 'recoil';

export const textState = atom({
	key: 'textState', // unique ID (with respect to other atoms/selectors)
	default: '', // default value (aka initial value)
});

export const filteredReleaseData = atom({
	key: 'filteredReleaseData', // unique ID (with respect to other atoms/selectors)
	default: { stratDate: '', endDate: '', release_status: '출고요청', release_type: '오전(10:00) 출고' }, // default value (aka initial value)
});

export const orderfilteredData = atom({
	key: 'orderfilteredData', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
});
