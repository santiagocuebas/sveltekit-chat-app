import { redirect } from '@sveltejs/kit';
import axios from 'axios';
import type { PageServerLoad } from './$types';
import { DIR } from '$lib/config.js';

export const load = (async ({ cookies }) => {
	const token = cookies.get('connect.sid');

	const data = await axios({
		method: 'GET',
		url: DIR + '/api/home/main',
		headers: { 'Cookie': `connect.sid=${token}` }
	}).then(res => res.data);

	if (data.error) {
		cookies.delete('connect.sid');
		throw redirect(307, '/login');
	}

	return data;
}) satisfies PageServerLoad;
