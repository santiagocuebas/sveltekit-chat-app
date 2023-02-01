import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {
	const data = await fetch('http://localhost:4200/api/home/main')
		.then(res => res.json());

	if (data.error) {
		cookies.delete('connect.sid');
		throw redirect(307, '/login');
	}

	return data;
}) satisfies PageServerLoad;
