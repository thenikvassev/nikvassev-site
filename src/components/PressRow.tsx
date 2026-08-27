import { pressLogos } from "@/lib/site";
import { LogoRow } from "./LogoRow";

type Props = {
  invert?: boolean;
};

export function PressRow({ invert = false }: Props) {
  return <LogoRow label="As seen in" logos={pressLogos} invert={invert} />;
}
