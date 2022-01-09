
export default {
	name: 'daybook',
	component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
	children: [
		{
			path: '',
			name: 'no-entry',
			component: () => import( /*webpackChunckName: "no-entry"*/ '../views/NoEntrySelected.vue'),
		},
		{
			path: ':id',
			name: 'entry',
			component: () => import( /*webpackChunckName: "entry"*/ '../views/EntryView.vue'),
			// props: () => ({ icon: 'fa-save' }),
		}
	]
};