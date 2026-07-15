import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-D4-FQyZZ.js
var ContactSchema = objectType({
	first_name: stringType().trim().min(1).max(80),
	last_name: stringType().trim().min(1).max(80),
	email: stringType().trim().email().max(200),
	company: stringType().trim().max(160).optional().default(""),
	job_title: stringType().trim().max(160).optional().default(""),
	team_size: stringType().trim().max(40).optional().default(""),
	message: stringType().trim().min(5).max(4e3)
});
var submitContact_createServerFn_handler = createServerRpc({
	id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
	name: "submitContact",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
var submitContact = createServerFn({ method: "POST" }).validator((input) => ContactSchema.parse(input)).handler(submitContact_createServerFn_handler, async ({ data }) => {
	const url = process.env.CONTACT_SUPABASE_URL;
	const anon = process.env.CONTACT_SUPABASE_ANON_KEY;
	const toEmail = process.env.CONTACT_TO_EMAIL ?? "";
	if (!url || !anon) throw new Error("Contact backend is not configured.");
	const payload = {
		first_name: data.first_name,
		last_name: data.last_name,
		email: data.email,
		company: data.company,
		job_title: data.job_title,
		team_size: data.team_size,
		message: data.message,
		to_email: toEmail
	};
	const res = await fetch(`${url}/rest/v1/contact_messages`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			apikey: anon,
			Authorization: `Bearer ${anon}`,
			Prefer: "return=minimal"
		},
		body: JSON.stringify(payload)
	});
	if (!res.ok) {
		const body = await res.text();
		console.error(`[contact] Supabase insert failed [${res.status}]: ${body}`);
		throw new Error(`Could not save your message (${res.status}). Please try again or email ${toEmail}.`);
	}
	return { ok: true };
});
//#endregion
export { submitContact_createServerFn_handler };
