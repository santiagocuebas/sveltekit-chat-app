import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const cookie = event.cookies.get('connect.sid');

	if (event.url.pathname === '/') {
		if (!cookie) throw redirect(307, '/login');
		
		const response = await resolve(event);
		return response;	
	} else if (event.url.pathname === '/login') {
		if (cookie) throw redirect(307, '/');
		
		const response = await resolve(event);
		return response;
	}

	throw redirect(307, '/');
}) satisfies Handle;
