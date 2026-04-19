/**
 * Diagrama SVG: anatomía de un contrato indexado y qué afecta la Ley 40h.
 * Se usa en posts de blog relacionados con regulación laboral / contratos.
 */
export function IndexedContractDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 440"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Anatomía de un contrato indexado y componentes impactados por la Ley 21.561"
    >
      <defs>
        <linearGradient id="icBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E293B" />
          <stop offset="1" stopColor="#0A1628" />
        </linearGradient>
        <linearGradient id="icImpacted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8A460" />
          <stop offset="1" stopColor="#C87533" />
        </linearGradient>
        <linearGradient id="icSafe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#94A3B8" />
          <stop offset="1" stopColor="#64748B" />
        </linearGradient>
      </defs>

      {/* Título */}
      <text
        x="30"
        y="30"
        fill="#0A1628"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Anatomía del precio de un contrato indexado
      </text>
      <text
        x="30"
        y="52"
        fill="#64748B"
        fontSize="13"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Los componentes naranjos son los que la Ley 21.561 obliga a recalcular.
      </text>

      {/* Formula visual: P(t) = P0 × (1 + α·ΔIPC + β·ΔHH + γ·ΔProd) */}
      <g transform="translate(30, 80)">
        {/* P(t) */}
        <rect x="0" y="0" width="90" height="60" rx="8" fill="url(#icBase)" />
        <text x="45" y="28" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="Georgia, serif">P(t)</text>
        <text x="45" y="48" textAnchor="middle" fill="#E8A460" fontSize="11" fontFamily="system-ui">Precio final</text>

        <text x="108" y="36" fill="#0A1628" fontSize="28" fontWeight="700">=</text>

        {/* P0 */}
        <rect x="140" y="0" width="90" height="60" rx="8" fill="url(#icSafe)" />
        <text x="185" y="28" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="Georgia, serif">P₀</text>
        <text x="185" y="48" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="system-ui">Precio base</text>

        <text x="248" y="36" fill="#0A1628" fontSize="28" fontWeight="700">×</text>

        {/* paréntesis abre */}
        <text x="280" y="46" fill="#64748B" fontSize="42" fontWeight="300">(</text>

        {/* 1 + */}
        <text x="306" y="36" fill="#0A1628" fontSize="22" fontWeight="600">1 +</text>

        {/* α·ΔIPC */}
        <rect x="355" y="0" width="120" height="60" rx="8" fill="url(#icSafe)" />
        <text x="415" y="30" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700" fontFamily="Georgia, serif">α · ΔIPC</text>
        <text x="415" y="48" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="system-ui">Inflación</text>

        <text x="486" y="36" fill="#0A1628" fontSize="22" fontWeight="600">+</text>

        {/* β·ΔHH - IMPACTED */}
        <rect x="510" y="0" width="130" height="60" rx="8" fill="url(#icImpacted)" />
        <text x="575" y="30" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700" fontFamily="Georgia, serif">β · ΔHH</text>
        <text x="575" y="48" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="system-ui">Horas-hombre</text>

        <text x="650" y="36" fill="#0A1628" fontSize="22" fontWeight="600">+</text>

        {/* γ·ΔProd - IMPACTED */}
        <rect x="674" y="0" width="150" height="60" rx="8" fill="url(#icImpacted)" />
        <text x="749" y="30" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700" fontFamily="Georgia, serif">γ · ΔProd</text>
        <text x="749" y="48" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="system-ui">Productividad</text>

        <text x="830" y="46" fill="#64748B" fontSize="42" fontWeight="300">)</text>
      </g>

      {/* Sección: impactados */}
      <g transform="translate(30, 200)">
        <rect x="0" y="0" width="840" height="170" rx="12" fill="#FFF7ED" stroke="#E8A460" strokeOpacity="0.4" strokeWidth="1.5" />

        <text x="20" y="32" fill="#C87533" fontSize="12" fontWeight="700" letterSpacing="1.5">COMPONENTES IMPACTADOS POR LA LEY 40H</text>

        {/* Bullet 1 */}
        <circle cx="30" cy="64" r="6" fill="#C87533" />
        <text x="48" y="68" fill="#0A1628" fontSize="14" fontWeight="600">β · ΔHH (indexador por horas-hombre)</text>
        <text x="48" y="86" fill="#64748B" fontSize="13">La base de cálculo cambia: el mismo trabajador rinde menos horas por semana.</text>

        {/* Bullet 2 */}
        <circle cx="30" cy="116" r="6" fill="#C87533" />
        <text x="48" y="120" fill="#0A1628" fontSize="14" fontWeight="600">γ · ΔProd (indexador por productividad o dotación)</text>
        <text x="48" y="138" fill="#64748B" fontSize="13">La productividad por trabajador y la dotación mínima pactada se recalculan.</text>

        {/* Right panel: sin impacto */}
        <rect x="460" y="48" width="360" height="104" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
        <text x="478" y="72" fill="#64748B" fontSize="11" fontWeight="700" letterSpacing="1.5">SIN IMPACTO DIRECTO</text>
        <circle cx="488" cy="98" r="5" fill="#64748B" />
        <text x="502" y="102" fill="#0A1628" fontSize="13" fontWeight="600">P₀ — precio base</text>
        <circle cx="488" cy="128" r="5" fill="#64748B" />
        <text x="502" y="132" fill="#0A1628" fontSize="13" fontWeight="600">α · ΔIPC — inflación</text>
      </g>

      {/* Leyenda inferior */}
      <g transform="translate(30, 400)">
        <rect x="0" y="0" width="18" height="18" rx="3" fill="url(#icImpacted)" />
        <text x="26" y="14" fill="#0A1628" fontSize="12">Requiere addendum</text>

        <rect x="170" y="0" width="18" height="18" rx="3" fill="url(#icSafe)" />
        <text x="196" y="14" fill="#0A1628" fontSize="12">Se mantiene sin ajuste</text>
      </g>
    </svg>
  );
}
