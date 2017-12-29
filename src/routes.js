import Home from './components/Home.vue';
import Search from './components/search/Search.vue';
import Profile from './components/profile/Profile.vue';
import Book from './components/card/Book.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/search', component: Search },
	{ path: '/profile', component: Profile },
	{ path: '/book', component: Book },
];
