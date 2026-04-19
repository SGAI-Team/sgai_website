/**
 * Diagrama SVG del ciclo de procurement SGAI (5 módulos).
 * Responsive, escalable, sin dependencias. Usa colores de la paleta oficial.
 * Usado en home, /demo y posts del blog.
 */
export function ProcurementCycleDiagram({ className = "" }: { className?: string }) {
  const modules = [
    { label: "Planificación", color: "#0EA5E9", short: "PLAN" },
    { label: "Proveedores", color: "#A855F7", short: "PROV" },
    { label: "Documentos", color: "#10B981", short: "DOCS" },
    { label: "Licitación", color: "#06B6D4", short: "LICIT" },
    { label: "Administración", color: "#EC4899", short: "ADMIN" },
  ];

  return (
    <svg
      viewBox="0 0 900 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ciclo de procurement SGAI: Planificación → Proveedores → Documentos → Licitación → Administración"
    >
      <defs>
        <linearGradient id="pcArrow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#C87533" stopOpacity="0.3" />
          <stop offset="0.5" stopColor="#C87533" stopOpacity="0.8" />
          <stop offset="1" stopColor="#C87533" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Línea de flujo base */}
      <line
        x1="90"
        y1="110"
        x2="810"
        y2="110"
        stroke="url(#pcArrow)"
        strokeWidth="3"
        strokeDasharray="6 6"
      />

      {modules.map((m, i) => {
        const x = 90 + i * 180;
        return (
          <g key={m.label}>
            {/* Glow exterior */}
            <circle
              cx={x}
              cy={110}
              r="52"
              fill={m.color}
              opacity="0.12"
            />
            {/* Círculo principal */}
            <circle
              cx={x}
              cy={110}
              r="42"
              fill={m.color}
              stroke="#fff"
              strokeWidth="3"
            />
            {/* Número */}
            <text
              x={x}
              y={102}
              textAnchor="middle"
              fill="#fff"
              fontSize="11"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            {/* Short label */}
            <text
              x={x}
              y={120}
              textAnchor="middle"
              fill="#fff"
              fontSize="13"
              fontWeight="700"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {m.short}
            </text>
            {/* Full label abajo */}
            <text
              x={x}
              y={188}
              textAnchor="middle"
              fill="#0A1628"
              fontSize="14"
              fontWeight="600"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {m.label}
            </text>
          </g>
        );
      })}

      {/* Arrows between */}
      {modules.slice(0, -1).map((_, i) => {
        const cx = 90 + i * 180 + 90;
        return (
          <path
            key={i}
            d={`M ${cx - 4} 110 l 8 -4 l 0 8 z`}
            fill="#C87533"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}
