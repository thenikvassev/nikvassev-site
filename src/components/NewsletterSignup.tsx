import { noteTurnstileSiteKey } from "@/lib/newsletter/turnstile";
import { readNewsletterEnv } from "@/lib/newsletter/env";
import { NewsletterForm } from "./NewsletterForm";

type Props = {
  variant?: "light" | "dark";
  id?: string;
};

export function NewsletterSignup({ variant, id }: Props) {
  const env = readNewsletterEnv();
  noteTurnstileSiteKey(env);
  return (
    <NewsletterForm
      variant={variant}
      id={id}
      turnstileSiteKey={env.turnstileSiteKey}
    />
  );
}
