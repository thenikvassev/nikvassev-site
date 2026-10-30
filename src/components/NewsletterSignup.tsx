import { NewsletterForm } from "./NewsletterForm";

type Props = {
  variant?: "light" | "dark";
  id?: string;
};

export function NewsletterSignup({ variant, id }: Props) {
  return <NewsletterForm variant={variant} id={id} />;
}
