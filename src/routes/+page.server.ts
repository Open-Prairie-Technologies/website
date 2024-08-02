import type { Actions } from './$types';
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		console.log(name);
		console.log(email);
		console.log(message);
	}
} satisfies Actions;
