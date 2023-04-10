import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const cookie = event.cookies.get('connect.sid');

	if (event.url.pathname === '/' && !cookie) {
		throw redirect(307, '/login');
	} else if (event.url.pathname === '/login' && cookie) {
		throw redirect(307, '/');
	} else if (event.url.pathname !== '/' && event.url.pathname !== '/login') {
		throw redirect(307, '/');
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;
