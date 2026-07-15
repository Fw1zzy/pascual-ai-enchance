import { r as __toESM } from "../_runtime.mjs";
import { D as isRedirect, _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { j as LoaderCircle, tt as Check, ut as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as createSsrRpc } from "./SiteLayout-Ci_UNRs4.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactForm-BeSf037S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var ContactSchema = objectType({
	first_name: stringType().trim().min(1).max(80),
	last_name: stringType().trim().min(1).max(80),
	email: stringType().trim().email().max(200),
	company: stringType().trim().max(160).optional().default(""),
	job_title: stringType().trim().max(160).optional().default(""),
	team_size: stringType().trim().max(40).optional().default(""),
	message: stringType().trim().min(5).max(4e3)
});
var submitContact = createServerFn({ method: "POST" }).validator((input) => ContactSchema.parse(input)).handler(createSsrRpc("1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd"));
var initial = {
	first_name: "",
	last_name: "",
	email: "",
	company: "",
	job_title: "",
	team_size: "1-50",
	message: ""
};
function ContactForm() {
	const submit = useServerFn(submitContact);
	const [values, setValues] = (0, import_react.useState)(initial);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const set = (k, v) => setValues((s) => ({
		...s,
		[k]: v
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("loading");
		setError("");
		try {
			await submit({ data: values });
			setStatus("success");
			setValues(initial);
		} catch (err) {
			setStatus("error");
			setError(err instanceof Error ? err.message : "Something went wrong.");
		}
	};
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-xl font-semibold",
				children: "Message received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Thanks — a senior member of our team will reply within one business day."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setStatus("idle"),
				className: "mt-6 inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium hover:bg-muted/60",
				children: "Send another message"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-2xl border border-border bg-card p-8 shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "First name",
						required: true,
						value: values.first_name,
						onChange: (v) => set("first_name", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Last name",
						required: true,
						value: values.last_name,
						onChange: (v) => set("last_name", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Work email",
						type: "email",
						required: true,
						value: values.email,
						onChange: (v) => set("email", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Company",
						value: values.company,
						onChange: (v) => set("company", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Job title",
						value: values.job_title,
						onChange: (v) => set("job_title", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block text-xs font-semibold text-foreground",
							children: "Team size"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: values.team_size,
							onChange: (e) => set("team_size", e.target.value),
							className: "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1-50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "51-250" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "251-1000" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1000+" })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1.5 block text-xs font-semibold text-foreground",
					children: "How can we help?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					required: true,
					minLength: 5,
					rows: 5,
					value: values.message,
					onChange: (e) => set("message", e.target.value),
					className: "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
				})]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "loading",
				className: "group mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-px hover:shadow-elevated disabled:opacity-60",
				children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Sending…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Send message",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
				] })
			})
		]
	});
}
function Field({ label, type = "text", value, onChange, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-1.5 block text-xs font-semibold text-foreground",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			required,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
		})]
	});
}
//#endregion
export { ContactForm as t };
