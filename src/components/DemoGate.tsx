"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";

const STORAGE_KEY = "sgai_demo_unlocked";

export function DemoGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true);
    } catch {
      /* ignore */
    }
    setChecked(true);
  }, []);

  const passcode =
    process.env.NEXT_PUBLIC_DEMO_PASSCODE || "sgai-demo-2026";

  const handle = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === passcode) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setUnlocked(true);
      setError("");
    } else {
      setError("Código incorrecto. Pídeselo al contacto comercial de SGAI.");
    }
  };

  if (!checked) return null;
  if (unlocked) return <>{children}</>;

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero px-6 py-20">
      <div className="max-w-md w-full">
        <div className="bg-sgai-slate/60 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="w-14 h-14 rounded-xl gradient-copper flex items-center justify-center mb-6">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-heading text-3xl text-white mb-3">
            Presentación privada SGAI
          </h1>
          <p className="text-sgai-steel text-base mb-6 leading-relaxed">
            Esta página está reservada para conversaciones con clientes
            potenciales. Ingresa el código que recibiste por correo o en la
            reunión.
          </p>
          <form onSubmit={handle} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Código de acceso"
              className="w-full px-4 py-3 rounded-lg bg-sgai-midnight border border-white/10 text-white placeholder:text-sgai-steel focus:outline-none focus:ring-2 focus:ring-sgai-copper/40 focus:border-sgai-copper transition-colors"
              autoFocus
            />
            {error ? (
              <p className="text-red-400 text-sm">{error}</p>
            ) : null}
            <button
              type="submit"
              className="w-full gradient-copper text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Entrar
            </button>
          </form>
          <p className="text-sgai-steel text-xs mt-6">
            ¿No tienes código?{" "}
            <a href="/contacto" className="text-sgai-copper hover:underline">
              Solicítalo aquí
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
