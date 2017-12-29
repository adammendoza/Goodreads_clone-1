import Home from './components/Home.vue';
import Search from './components/search/Search.vue';
import Profile from './components/profile/Profile.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/search', component: Search },
	{ path: '/profile', component: Profile },
];
