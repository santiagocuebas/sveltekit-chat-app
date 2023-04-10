import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { DIR } from '$lib/config.js';

export const load = (async ({ cookies, fetch }) => {
	const data = await fetch(DIR + '/api/home/main')
		.then(res => res.json());

	if (data.error) {
		cookies.delete('connect.sid');
		throw redirect(307, '/login');
	}

	return data;
}) satisfies PageServerLoad;
