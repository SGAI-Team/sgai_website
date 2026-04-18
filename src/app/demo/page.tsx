import type { Metadata } from "next";
import { DemoGate } from "@/components/DemoGate";
import { DemoPitch } from "@/components/DemoPitch";

export const metadata: Metadata = {
  title: "Presentación privada",
  description:
    "Página privada para conversaciones comerciales de SGAI. Acceso con código.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
  alternates: { canonical: undefined },
};

export default function DemoPage() {
  return (
    <DemoGate>
      <DemoPitch />
    </DemoGate>
  );
}
