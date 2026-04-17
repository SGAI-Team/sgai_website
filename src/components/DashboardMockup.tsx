"use client";

import { motion } from "motion/react";
import { AlertTriangle, TrendingUp, FileText, Clock } from "lucide-react";

const kpis = [
  { label: "Contratos activos", value: "147", icon: FileText, trend: "+12%" },
  { label: "OC en proceso", value: "89", icon: Clock, trend: "+5%" },
  { label: "Gasto mensual", value: "$2.4M", icon: TrendingUp, trend: "-3%" },
];

const contracts = [
  { id: "CT-2024-0847", supplier: "Komatsu Chile", status: "Vigente", amount: "$450K", risk: false },
  { id: "CT-2024-0912", supplier: "Atlas Copco", status: "Por vencer", amount: "$280K", risk: true },
  { id: "CT-2024-0156", supplier: "Finning CAT", status: "Vigente", amount: "$1.2M", risk: false },
  { id: "CT-2024-0733", supplier: "Epiroc Chile", status: "En revisión", amount: "$560K", risk: false },
];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-sgai-midnight rounded-2xl border border-white/10 p-4 md:p-6 shadow-2xl max-w-lg w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">
            Dashboard
          </div>
          <div className="text-white font-semibold text-sm">Plataforma SGAI</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-sgai-success animate-pulse" />
          <span className="text-sgai-success text-[10px]">En línea</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-sgai-slate/60 rounded-lg p-3 border border-white/5"
          >
            <kpi.icon className="w-3.5 h-3.5 text-sgai-copper mb-1.5" />
            <div className="text-white font-bold text-lg leading-none">{kpi.value}</div>
            <div className="text-white/40 text-[10px] mt-1">{kpi.label}</div>
            <div className="text-sgai-success text-[10px] mt-0.5">{kpi.trend}</div>
          </div>
        ))}
      </div>

      {/* Alert */}
      <div className="flex items-center gap-2 bg-sgai-warning/10 border border-sgai-warning/20 rounded-lg px-3 py-2 mb-4">
        <AlertTriangle className="w-3.5 h-3.5 text-sgai-warning shrink-0" />
        <span className="text-sgai-warning text-[11px]">
          Alerta: desfinanciamiento detectado en CT-0912
        </span>
      </div>

      {/* Mini chart */}
      <div className="bg-sgai-slate/40 rounded-lg p-3 mb-4 border border-white/5">
        <div className="text-white/40 text-[10px] mb-2">Gasto mensual (M USD)</div>
        <div className="flex items-end gap-1 h-12">
          {[65, 45, 70, 55, 80, 60, 75, 50, 85, 70, 55, 65].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex-1 rounded-sm gradient-copper opacity-60"
            />
          ))}
        </div>
      </div>

      {/* Contracts table */}
      <div className="bg-sgai-slate/40 rounded-lg border border-white/5 overflow-hidden">
        <div className="px-3 py-2 border-b border-white/5">
          <span className="text-white/40 text-[10px] uppercase tracking-wider">
            Contratos recientes
          </span>
        </div>
        <div className="divide-y divide-white/5">
          {contracts.map((c) => (
            <div
              key={c.id}
              className="px-3 py-2 flex items-center gap-3 text-[11px]"
            >
              <span className="text-sgai-copper font-mono">{c.id}</span>
              <span className="text-white/70 flex-1 truncate">{c.supplier}</span>
              <span
                className={
                  c.risk
                    ? "text-sgai-warning"
                    : c.status === "Vigente"
                    ? "text-sgai-success"
                    : "text-white/50"
                }
              >
                {c.status}
              </span>
              <span className="text-white/50 font-mono">{c.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
