"use client";

import { Check, X } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./SectionReveal";

const rows = [
  {
    feature: "Plataforma tech",
    bpo: "Costo adicional",
    sgai: "Incluida a $0",
  },
  {
    feature: "Monitoreo de gasto",
    bpo: "Reportes manuales",
    sgai: "Tiempo real + alertas",
  },
  {
    feature: "Revisión de BT",
    bpo: "100% manual",
    sgai: "Asistida por IA",
  },
  {
    feature: "Análisis propuestas",
    bpo: "Plantillas básicas",
    sgai: "Resúmenes automáticos",
  },
  {
    feature: "Revisión contratos",
    bpo: "Servicio externo",
    sgai: "Incluido en el BPO",
  },
  {
    feature: "Customización",
    bpo: "Contratos estándar",
    sgai: "Adaptable por cliente",
  },
];

export function ComparisonTable() {
  return (
    <StaggerContainer className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div />
        <div className="text-center">
          <span className="text-sgai-steel font-medium text-sm uppercase tracking-wider">
            BPO Tradicional
          </span>
        </div>
        <div className="text-center">
          <span className="gradient-copper-text font-bold text-sm uppercase tracking-wider">
            SGAI
          </span>
        </div>
      </div>

      {/* Rows */}
      {rows.map((row) => (
        <StaggerItem key={row.feature}>
          <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 items-center">
            <div className="font-medium text-sgai-midnight text-sm md:text-base">
              {row.feature}
            </div>
            <div className="flex items-center justify-center gap-2">
              <X className="w-4 h-4 text-red-400 shrink-0" />
              <span className="text-sgai-steel text-xs md:text-sm">{row.bpo}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-sgai-success shrink-0" />
              <span className="text-sgai-midnight text-xs md:text-sm font-medium">
                {row.sgai}
              </span>
            </div>
          </div>
        </StaggerItem>
      ))}

      <StaggerItem>
        <p className="text-xs text-sgai-steel mt-6 text-center">
          Comparación basada en análisis de mercado de BPO de abastecimiento en
          Chile, abril 2026.
        </p>
      </StaggerItem>
    </StaggerContainer>
  );
}
