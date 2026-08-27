import { clientLogos } from "@/lib/site";
import { LogoRow } from "./LogoRow";

type Props = {
  invert?: boolean;
};

export function ClientsRow({ invert = false }: Props) {
  return (
    <LogoRow label="Clients and Partners" logos={clientLogos} invert={invert} />
  );
}
