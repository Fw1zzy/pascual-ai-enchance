import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

type FormState = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  job_title: string;
  team_size: string;
  message: string;
};

const initial: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  job_title: "",
  team_size: "1-50",
  message: "",
};

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setValues((s) => ({ ...s, [k]: v }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center shadow-soft">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Message received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks — a senior member of our team will reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium hover:bg-muted/60"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="First name"
          required
          value={values.first_name}
          onChange={(v) => set("first_name", v)}
        />
        <Field
          label="Last name"
          required
          value={values.last_name}
          onChange={(v) => set("last_name", v)}
        />
        <Field
          label="Work email"
          type="email"
          required
          value={values.email}
          onChange={(v) => set("email", v)}
        />
        <Field label="Company" value={values.company} onChange={(v) => set("company", v)} />
        <Field label="Job title" value={values.job_title} onChange={(v) => set("job_title", v)} />
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-foreground">Team size</span>
          <select
            value={values.team_size}
            onChange={(e) => set("team_size", e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option>1-50</option>
            <option>51-250</option>
            <option>251-1000</option>
            <option>1000+</option>
          </select>
        </label>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold text-foreground">
          How can we help?
        </label>
        <textarea
          required
          minLength={5}
          rows={5}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-px hover:shadow-elevated disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
