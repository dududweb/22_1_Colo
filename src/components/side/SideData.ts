export const RELEASE_DATA = [
	{ id: 1, title: '출고 요청업체', name: 'comp_name', selectItems: [{ id: 1, value: '콜로상사' }] },
	{ id: 2, title: '출고 요청자', name: 'user_name', selectItems: [{ id: 1, value: 'test_sample@collo.kr' }] },
	{ id: 3, title: '출고형식', name: 'delivery_method', selectItems: [{ id: 1, value: '택배' }] },
	{
		id: 4,
		title: '출고상태',
		name: 'release_status',
		selectItems: [
			{ id: 1, value: '출고요청' },
			{ id: 2, value: '출고중' },
			{ id: 3, value: '출고완료' },
		],
	},
	{
		id: 5,
		title: '출고유형',
		name: 'release_type',
		selectItems: [
			{ id: 1, value: '오전(10:00) 출고' },
			{ id: 2, value: '오후(04:00) 출고' },
		],
	},
	{ id: 6, title: '파일명', selectItems: [{ id: 1, value: 'Iamgold Corporation.xls' }] },
];
