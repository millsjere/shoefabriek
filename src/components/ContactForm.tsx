"use client";

import { useActionState, type ReactNode } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center">
        <h3 className="font-display text-lg text-ink">Message Sent</h3>
        <p className="mt-2 text-ink-soft">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5 sm:grid-cols-2">
      <Field label="Your Name" htmlFor="name">
        <input id="name" name="name" type="text" required className={inputClass} />
      </Field>
      <Field label="Email Address" htmlFor="email">
        <input id="email" name="email" type="email" required className={inputClass} />
      </Field>
      <Field label="Phone Number" htmlFor="phone">
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </Field>
      <Field label="Subject" htmlFor="subject">
        <input id="subject" name="subject" type="text" className={inputClass} />
      </Field>
      <Field label="Your Message" htmlFor="message" full>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </Field>

      {state.status === "error" && (
        <p className="text-sm font-medium text-red-600 sm:col-span-2">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-fit items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

function Field({
  label,
  htmlFor,
  full,
  children,
}: {
  label: string;
  htmlFor: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
