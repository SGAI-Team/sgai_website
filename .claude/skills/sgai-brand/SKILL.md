---
name: sgai-brand
description: Use this skill when creating presentations, proposals, pitch decks, one-pagers, brochures, LinkedIn posts, slide templates, email signatures, or any visual/textual asset that must carry SGAI's brand identity. SGAI = BPO + Plataforma de Procurement con IA para minería, energía y construcción en Chile y LatAm. Triggers: "haz una propuesta SGAI", "presentación SGAI", "pitch SGAI", "slides SGAI", "one-pager SGAI", "brochure SGAI".
---

# SGAI Brand Kit + Guía de Propuestas y Presentaciones

Este skill contiene **todo** lo necesario para producir assets de SGAI con coherencia visual y narrativa. Léelo entero antes de generar cualquier entregable.

---

## 1. Identidad & Posicionamiento

- **Nombre oficial**: SGAI — Abastecimiento Inteligente
- **Tagline corta**: "BPO + Plataforma de Procurement con IA"
- **Tagline extendida**: "Abastecimiento inteligente para empresas que construyen Latinoamérica"
- **Qué es**: Consultora chilena que combina (a) BPO de procurement ejecutado por ingenieros senior y (b) plataforma propia con IA para gestión de contratos, órdenes de compra, licitaciones y revisión de Bases Técnicas.
- **Sitio**: https://sgai.cl
- **Mercado**: Chile (base), expansión a Perú, Colombia, México.
- **Industrias prioritarias**: minería del cobre y litio > energía y oil&gas > ingeniería y construcción EPC/EPCM > industria y manufactura.
- **Fundación**: 2026.
- **Contacto**: contacto@sgai.cl · Santiago, RM, Chile.
- **Posicionamiento en una frase**: "La capa de inteligencia y ejecución que SAP Ariba no cubre."

---

## 2. Paleta de colores

**Uso**: copia los hex directo a PowerPoint, Figma, Canva, Gamma, Keynote, o el sistema de diseño que uses. Los nombres con prefijo `sgai-` son tokens internos usados en el sitio web.

### Core palette

| Nombre | HEX | RGB | HSL | Uso |
|---|---|---|---|---|
| `sgai-midnight` | **#0A1628** | 10, 22, 40 | 220° 60% 10% | Background principal oscuro. Sección hero. Headers. |
| `sgai-slate` | **#1E293B** | 30, 41, 59 | 217° 33% 17% | Superficie secundaria (cards sobre midnight). |
| `sgai-copper` | **#C87533** | 200, 117, 51 | 25° 59% 49% | Acento principal. CTAs. Highlights. Logo. |
| `sgai-copper-light` | **#E8A460** | 232, 164, 96 | 28° 72% 64% | Hover, gradientes, acentos secundarios. |
| `sgai-copper-glow` | **rgba(200,117,51,0.15)** | — | — | Glows y sombras de acento. |
| `sgai-steel` | **#64748B** | 100, 116, 139 | 215° 16% 47% | Texto secundario sobre fondo claro. |
| `sgai-ice` | **#F1F5F9** | 241, 245, 249 | 210° 40% 96% | Fondo claro alternativo (cards). |
| `sgai-white` | **#FAFBFC** | 250, 251, 252 | 210° 20% 98% | Fondo claro principal. |

### Estado / Semántica

| Nombre | HEX | Uso |
|---|---|---|
| `sgai-success` | **#22C55E** | Verde validación |
| `sgai-warning` | **#F59E0B** | Ámbar advertencia |
| `sgai-info` | **#3B82F6** | Azul información (nunca competir con copper) |

### Gradientes oficiales

- **gradient-hero** (dark background premium):
  `linear-gradient(135deg, #0A1628 0%, #162033 30%, #1a2540 50%, #162033 70%, #0A1628 100%)`
- **gradient-copper** (CTAs, acentos destacados):
  `linear-gradient(135deg, #C87533 0%, #E8A460 100%)`
- **gradient-copper-text** (texto destacado):
  mismo gradiente aplicado como `background-clip: text`.

### Reglas de contraste (WCAG AA)

- **Texto blanco sobre `midnight`** (#0A1628): ratio 16.2 ✅
- **Texto `steel` sobre `white`**: ratio 4.6 ✅
- **Texto blanco sobre `copper`** (#C87533): ratio 3.4 — **pasa solo para texto bold ≥ 18px**. Para texto chico, oscurecer copper a `#A85E25`.
- **Nunca** uses `copper` sobre `copper-light` ni al revés.

---

## 3. Tipografía

- **Headings**: **DM Serif Display** (Google Fonts, weight 400). Única fuente serif del sistema, solo para títulos grandes. Transmite solidez y tradición (procurement, industria).
- **Body / UI**: **Outfit** (Google Fonts, weights 400 / 500 / 600 / 700). Sans-serif moderna, alta legibilidad. Para todo el resto.
- **Fallback stack**:
  - Headings: `"DM Serif Display", Georgia, serif`
  - Body: `"Outfit", -apple-system, "Segoe UI", Roboto, Arial, sans-serif`

### Escala recomendada (presentaciones)

| Uso | Tamaño (pt) | Font-weight |
|---|---|---|
| Slide title | 44-56 pt DM Serif Display | 400 |
| Slide subtitle | 24-28 pt Outfit | 500 |
| Body text | 18-22 pt Outfit | 400 |
| Caption / footer | 12-14 pt Outfit | 500 |
| Data label / badge | 11-13 pt Outfit | 600 uppercase tracking-wide |

### Escala web (solo referencia)

Títulos `text-3xl` a `text-7xl`, body `text-lg`. Para replicar visualmente en slides, trabaja en 1920×1080 y usa los pt indicados arriba.

---

## 4. Voz y tono — Cómo escribe SGAI

**Tres principios de copy**:

1. **Concreto, no genérico**. Nunca "transformación digital", "sinergias" ni "optimización de procesos". Sí: "reducimos las HH de revisión de Bases Técnicas en 70%".
2. **Operacional, no corporativo**. El lector es jefe de abastecimiento, gerente de operaciones o CFO. Habla de su realidad: OC, SAP Ariba, JDE, Bases Técnicas, desfinanciamiento, compliance DT, cambios de turno, faenas.
3. **Directo, sin dobles negaciones**. "Pagás caro si no lo haces ahora" antes que "sería recomendable considerar".

**Léxico interno** (úsalo sin explicar):
- BPO · OC · HH · BT (Bases Técnicas) · SLA · EPC/EPCM · Ariba · JDE · DT (Dirección del Trabajo)
- "Faena", "operación", "stock contractual", "desfinanciamiento", "compliance"
- Dinero: siempre en CLP o USD con sufijo MM o K. "CLP 280 MM", "USD 1.8 MM". Nunca "280 millones de pesos".
- Tiempos: "90 días", "primer trimestre", "H2 2026".

**Léxico prohibido**:
- "Democratizar", "empoderar", "game-changer", "sinergia", "transformación digital".
- Emojis (salvo el logo).
- Signos de admiración en body (solo en CTAs breves, máx 1 por slide).
- Jerga de startup ("crushear", "killer feature", "10x").

**Español chileno profesional**. Usar "tú" (no "vos" ni "usted"). Aceptar chilenismos contextuales ("faena", "compañía minera", "gran minería").

---

## 5. Estructura de PROPUESTA COMERCIAL (PDF / Word / Gamma)

Cuando un agente debe generar una propuesta comercial para un cliente potencial, usar esta estructura:

```
1. Portada
   - Logo SGAI + gradient-hero background
   - "Propuesta para [NOMBRE CLIENTE]"
   - "[NOMBRE PROYECTO]"
   - Fecha · autor · confidencialidad

2. Resumen ejecutivo (1 página)
   - Problema del cliente en sus propias palabras (validated en discovery)
   - Propuesta SGAI en 3 bullets: alcance, plazo, inversión rango
   - Resultado esperado en métrica concreta (HH ahorradas, CLP ahorrados, % SLA)

3. Contexto y diagnóstico (1-2 páginas)
   - Dolores observados (listado bullet)
   - Números de baseline del cliente si los dio en discovery
   - Por qué el status quo es más caro que la inversión

4. Alcance propuesto (2-3 páginas)
   - Componentes del servicio: BPO + módulos de plataforma activados
   - Integraciones: Ariba, JDE, SAP, Excel — los que correspondan
   - Lo que NO incluye (cláusula de exclusiones)

5. Metodología y plan (1-2 páginas)
   - Fases 1-4 (Diagnóstico → Integración → Piloto → Rollout)
   - Timeline en diagrama (8-14 semanas típico)
   - Hitos y entregables por fase

6. Equipo asignado (1 página)
   - Roles: Project Lead, Ingenieros BPO, Plataforma Lead, QA
   - Dedicación estimada por rol

7. Casos de referencia (1-2 páginas)
   - 2-3 casos anonimizados con números
   - Screenshot o esquema de lo que se construyó

8. Inversión (1 página)
   - Fee mensual BPO (rango) + licenciamiento plataforma (incluido)
   - Setup fee one-time
   - Condiciones de pago, plazos, renovación

9. Próximos pasos (media página)
   - 3 acciones concretas con fechas
   - Firmante propuesto

10. Anexos (opcional)
    - Términos legales, SLAs, stack técnico, referencias, DPA
```

**Tono de la propuesta**: técnica pero legible. Un gerente general debe entenderla, un CIO debe validarla técnicamente.

**Extensión sugerida**: 10-14 páginas. Más es ruido.

---

## 6. Estructura de PITCH DECK (investors / partnerships)

```
Slide 1  — Portada (logo + tagline + confidencial)
Slide 2  — El problema (1 frase + stat chileno: "US$83B en pipeline minero al 2033...")
Slide 3  — Por qué ahora (3 disruptores: Ley 21.561, Ariba gap, IA madura)
Slide 4  — Solución (BPO + Plataforma, 2 columnas)
Slide 5  — Cómo funciona (diagrama de arquitectura simple)
Slide 6  — Módulos de plataforma (grid 6: BT, contratos, OC, licitaciones, alertas, reportes)
Slide 7  — Industrias y mercado (mapa LatAm + stats por país)
Slide 8  — Caso / tracción (1 caso ancla con números concretos)
Slide 9  — Modelo de negocio (fee BPO + pricing plataforma)
Slide 10 — Ventaja competitiva (vs Ariba, vs consultoras tradicionales)
Slide 11 — Equipo (foto + años de industria, énfasis en procurement minero)
Slide 12 — Roadmap (próximos 12-24 meses)
Slide 13 — Ask / próximos pasos
Slide 14 — Contacto (email + web + logo)
```

**Extensión sugerida**: 12-16 slides. Nada más.

---

## 7. Estructura de ONE-PAGER (brochure digital, impresión A4)

```
Mitad superior:
- Logo + tagline
- Headline: "Abastecimiento inteligente para [INDUSTRIA]"
- 3 bullets con verbos fuertes (gestionamos, monitoreamos, revisamos)

Mitad inferior:
- Grid 2x2 con 4 módulos o 4 beneficios, cada uno con icono + título + 1 frase
- CTA: "Solicita una demo · sgai.cl"
- Footer con contacto + QR al sitio
```

Background: `gradient-hero` (dark). Acentos copper. Texto blanco + steel.

---

## 8. Layouts y composición de slide

### Layout "Hero dark" (slides 1, 3, 9, 13 típicos)

- Background: `gradient-hero`
- Overlay textura: puntos sutiles `rgba(200,117,51,0.06)` cada 40px (copia el patrón del sitio).
- Título grande `sgai-white` con una palabra clave en `gradient-copper-text`.
- Subtítulo `sgai-steel`.
- Logo SGAI arriba-izquierda (40pt), línea copper debajo de 80×4pt.
- Footer: número slide + "sgai.cl" en 12pt `sgai-steel`.

### Layout "Light card" (slides de datos, casos, tablas)

- Background: `sgai-white`.
- Card principal: `sgai-ice` con borde 1pt `#E2E8F0`, radius 16pt.
- Título en `sgai-midnight`, body en `sgai-steel`.
- Tablas: header `sgai-midnight` con texto blanco, filas alternadas `sgai-white` / `sgai-ice`.

### Layout "Split" (solución / comparativa)

- 2 columnas iguales (50/50 o 40/60).
- Columna izquierda: `gradient-hero` dark, columna derecha: `sgai-white` light.
- Usar para comparar "antes vs después", "BPO vs Ariba", etc.

### Layout "Metric wall"

- 4 o 6 tiles grandes con número enorme (DM Serif Display 96pt copper) + label Outfit 16pt uppercase.
- Ejemplo: `-70% HH` · `+180 contratos revisados` · `<24h respuesta` · `100% compliance DT`.

---

## 9. Iconografía

- **Librería permitida**: Lucide (https://lucide.dev) stroke 1.5-2px.
- **Color de iconos**: `sgai-copper` sobre light, `sgai-copper-light` sobre dark.
- **Tamaño típico**: 24-40px en body, 48-80px en hero.
- **Iconos recurrentes del sistema**: `Users` (BPO), `LayoutDashboard` (plataforma), `FileText` (contratos), `ClipboardList` (OCs), `Search` (revisión BT), `Shield` (compliance), `BarChart3` (monitoreo), `Scale` (legal), `Workflow` (proceso), `Clock` (tiempo), `AlertTriangle` (riesgo), `TrendingDown` (ahorro).

**Regla**: nunca más de 6 iconos distintos en una misma presentación. Elegí uno por concepto y repetí.

---

## 10. Imágenes / assets disponibles

### Open Graph images (para slides de portada, social, cabezales)

Todas en `/public/og/` del repo, 1200×630, PNG optimizado:

- `home.png` — "BPO + Plataforma"
- `servicio-bpo.png` — "Ingenieros dedicados"
- `plataforma.png` — "Plataforma SGAI"
- `industrias.png` — "Abastecimiento crítico"
- `mineria.png` — "Cobre y litio"
- `energia.png` — "Energía y oil & gas"
- `construccion.png` — "Ingeniería y construcción"
- `nosotros.png` — "Equipo con +12 años"
- `contacto.png` — "Conversemos"
- `faq.png` — "Preguntas frecuentes"
- `ley40mineria.png` — "Ley 40h en contratos mineros"

### Texturas y backgrounds

- `/public/mining-bg.svg` — vector open-pit abstracto, usar como background sección minería.
- `/public/mining-hero.png` — foto cinematográfica de mina para heros.

**Si necesitas imagen nueva no disponible**: genera con Nano Banana / Gemini usando este prompt base:

> Cinematic hero imagery for SGAI — procurement BPO for Latin American heavy industry. Palette: deep midnight navy #0A1628 dominant, rich copper #C87533 and amber #E8A460 accents, subtle blue #3B82F6 haze. Mood: premium, industrial, confident. Subjects: copper mine open pit, minesite haulers at dusk, procurement war-room with screens, engineers reviewing contracts, dashboards with copper gauges. Shot on Arri Alexa, anamorphic, fine film grain, heavy atmospheric fog. No text, no logos. 16:9 cinematic landscape.

---

## 11. Proveedores externos para formatos específicos

| Formato | Herramienta recomendada |
|---|---|
| Deck editable | **PowerPoint** (corporativo) o **Gamma** (AI-assisted) |
| Pitch deck "wow" | **Pitch.com** o **Figma Slides** |
| Propuesta PDF | **Google Docs → PDF** con template SGAI |
| Brochure impreso | **Figma** con export a PDF/X-1a CMYK |
| One-pager digital | **Figma** o **Canva Pro** |
| Video intro | **Runway** / **Descript** con VO masculino voz grave tono confiado |

**Fuentes a embedar en PDFs**: DM Serif Display y Outfit (subset latin). Si el medio no permite Google Fonts, fallback a **Playfair Display** (serif) y **Inter** (sans).

---

## 12. Reglas de producción

1. **Siempre validar contraste** antes de exportar: ningún texto bajo ratio 4.5:1 (excepto bold ≥18pt con 3:1).
2. **Un mensaje por slide**. Si el slide necesita dos títulos, son dos slides.
3. **Cifras siempre con fuente**. "CLP 280 MM en ajustes sorpresa" debe tener footnote "Fuente: baseline cliente, 2025" o similar.
4. **Evitar stock photography** genérica. Si no hay imagen adecuada del kit, usar ilustración vectorial con paleta SGAI.
5. **Footer consistente**: `[número slide] · sgai.cl · Confidencial` en 11pt `sgai-steel`.
6. **Portada y cierre** siempre con `gradient-hero` + logo, nunca con foto.
7. **Nombrar archivos**: `SGAI_[TipoAsset]_[Cliente]_[YYYYMMDD].pdf` — ej. `SGAI_Propuesta_Codelco-RT_20260418.pdf`.

---

## 13. Ejemplo: slide "Caso minero" correctamente formateado

**Título (DM Serif Display 44pt, sgai-white sobre midnight)**:
> Faena cuprífera, 180 contratos, <span style="copper gradient">30 días</span>

**Subtítulo (Outfit 20pt, sgai-steel)**:
> Antofagasta · 2.100 trabajadores directos · USD 240 MM anual en contratos

**Tabla (midnight header, white rows)**:
| Indicador | Sin BPO | Con SGAI |
|---|---|---|
| Contratos revisados a tiempo | 40% | 100% |
| HH legal / analista | 520 h | 80 h |
| Sobrecosto primer año | USD 1.8 MM | USD 0.3 MM |
| Incidencias DT | 9 | 0 |

**Footer**: `05 · sgai.cl · Confidencial — Preparado para [CLIENTE]`

---

## 14. Cuándo NO usar estos lineamientos

- Comunicación interna informal (Slack, mail a equipo).
- Contenido técnico muy específico (arquitectura de software) donde aplican otras convenciones de diagramación.
- Posts de redes sociales personales del equipo (no son brand oficial).

Para todo lo demás que represente a SGAI frente a un cliente, inversor, proveedor o medio: **aplicar este kit completo**.

---

## 15. Prompts de arranque útiles

**Generar propuesta**:
> Genera una propuesta SGAI para [CLIENTE], industria [X], problema [Y]. Usa la estructura de la sección 5 de sgai-brand. Tono operacional, nada de jerga corporativa. Incluye tabla de baseline y tabla de resultados esperados. Extensión 10-12 páginas.

**Generar deck**:
> Genera un pitch deck de 14 slides para SGAI según estructura sección 6. Primer slide con gradient-hero. Slide 2 empieza con el stat "US$83B en pipeline minero al 2033 · Cochilco". Incluye métrica wall en slide 8.

**Generar one-pager**:
> Brochure A4 SGAI para [industria]. Sección 7 del brand kit. Background dark gradient-hero mitad superior, light mitad inferior. 4 módulos en grid 2x2. QR a sgai.cl abajo.

**Generar imagen de hero**:
> Usa el prompt base de la sección 10 del brand kit. Target: slide 1 portada. Variar el sujeto a [mina / faena / dashboard]. 16:9, 1920×1080.
