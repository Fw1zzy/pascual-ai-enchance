import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  first_name: z.string().trim().min(1).max(80),
  last_name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().default(""),
  job_title: z.string().trim().max(160).optional().default(""),
  team_size: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(5).max(4000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env.CONTACT_SUPABASE_URL;
    const anon = process.env.CONTACT_SUPABASE_ANON_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "";
    if (!url || !anon) {
      throw new Error("Contact backend is not configured.");
    }

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      company: data.company,
      job_title: data.job_title,
      team_size: data.team_size,
      message: data.message,
      to_email: toEmail,
    };

    const res = await fetch(`${url}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anon,
        Authorization: `Bearer ${anon}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[contact] Supabase insert failed [${res.status}]: ${body}`);
      throw new Error(
        `Could not save your message (${res.status}). Please try again or email ${toEmail}.`,
      );
    }

    return { ok: true };
  });
