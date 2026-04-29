import React from 'react';

export function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-lg shadow-sm ${className}`}>
      {title && <div className="px-4 py-2 border-b border-slate-100 text-sm font-semibold text-slate-700">{title}</div>}
      <div className="p-4">{children}</div>
    </div>
  );
}

export function Pill({ children, color = 'slate' }) {
  const map = {
    slate: 'bg-slate-100 text-slate-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
    violet: 'bg-violet-100 text-violet-700',
    sky: 'bg-sky-100 text-sky-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    pink: 'bg-pink-100 text-pink-700'
  };
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${map[color] || map.slate}`}>{children}</span>;
}

export function Callout({ kind = 'info', title, children }) {
  const map = {
    info: 'bg-sky-50 border-sky-300 text-sky-900',
    warn: 'bg-amber-50 border-amber-300 text-amber-900',
    danger: 'bg-red-50 border-red-300 text-red-900',
    tip: 'bg-emerald-50 border-emerald-300 text-emerald-900',
    formula: 'bg-violet-50 border-violet-300 text-violet-900',
    example: 'bg-indigo-50 border-indigo-300 text-indigo-900'
  };
  return (
    <div className={`border-l-4 p-3 rounded-r my-3 ${map[kind] || map.info}`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-3">
      <table className="min-w-full text-sm border border-slate-200 rounded">
        <thead className="bg-slate-100">
          <tr>{headers.map((h, i) => <th key={i} className="px-3 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
              {r.map((c, j) => <td key={j} className="px-3 py-2 border-b border-slate-100 align-top">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DifficultyChip({ level }) {
  const map = {
    E: 'bg-green-100 text-green-700',
    M: 'bg-yellow-100 text-yellow-800',
    H: 'bg-red-100 text-red-700'
  };
  const label = { E: 'Easy', M: 'Medium', H: 'Hard' }[level] || '';
  if (!level) return null;
  return <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${map[level]}`} title={label}>{level}</span>;
}

export function AnchorImage({ src, alt, caption }) {
  const url = `${import.meta.env.BASE_URL}images/${src}`;
  return (
    <figure className="my-3">
      <img src={url} alt={alt} className="rounded-lg border border-slate-200 shadow-sm max-w-full h-auto" loading="lazy" />
      {caption && <figcaption className="text-xs text-slate-500 mt-1 italic">{caption}</figcaption>}
    </figure>
  );
}

/* ----------------------------- Math helpers ----------------------------- */

// Display a formula or equation in a centered, styled box.
export function Formula({ children, label }) {
  return (
    <div className="my-3 bg-gradient-to-br from-violet-50 to-indigo-50 border-2 border-violet-200 rounded-lg p-4 flex items-center justify-between gap-4 flex-wrap">
      <div className="font-mono text-base md:text-lg text-violet-900 font-semibold whitespace-pre-wrap">{children}</div>
      {label && <div className="text-xs uppercase tracking-wide text-violet-600 font-bold">{label}</div>}
    </div>
  );
}

// Inline math text — slightly styled monospace for use within prose.
export function M({ children }) {
  return <span className="font-mono bg-violet-50 px-1 py-0.5 rounded text-violet-900 text-[0.95em]">{children}</span>;
}

// Fraction display — pure CSS, no LaTeX.
export function Frac({ n, d }) {
  return (
    <span className="inline-flex flex-col items-center align-middle text-center mx-0.5 leading-tight">
      <span className="px-1 border-b border-current">{n}</span>
      <span className="px-1">{d}</span>
    </span>
  );
}

// Step-by-step worked example — numbered steps, optional final answer banner.
export function Steps({ title = 'Step-by-step solution', steps, answer }) {
  return (
    <div className="my-4 bg-white border-2 border-indigo-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-2 text-sm font-bold flex items-center gap-2">
        <span>📝</span><span>{title}</span>
      </div>
      <ol className="p-4 space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm flex items-center justify-center">{i + 1}</span>
            <div className="flex-1 text-sm text-slate-800 leading-relaxed">{s}</div>
          </li>
        ))}
      </ol>
      {answer != null && (
        <div className="bg-emerald-50 border-t-2 border-emerald-200 px-4 py-3 text-sm">
          <span className="font-bold text-emerald-700 mr-2">Answer:</span>
          <span className="text-emerald-900 font-semibold">{answer}</span>
        </div>
      )}
    </div>
  );
}

// Worked-example wrapper: problem statement, then step-by-step.
export function Example({ problem, steps, answer, title }) {
  return (
    <div className="my-4 border-2 border-indigo-300 rounded-xl bg-indigo-50/30">
      <div className="px-4 py-2 bg-indigo-100/70 border-b border-indigo-200 rounded-t-xl text-sm font-bold text-indigo-900 flex items-center gap-2">
        <span>💡</span><span>{title || 'Worked Example'}</span>
      </div>
      <div className="px-4 pt-3 pb-1 text-slate-800">
        <div className="text-sm font-semibold text-slate-700 mb-1">Problem:</div>
        <div className="text-sm">{problem}</div>
      </div>
      <Steps steps={steps} answer={answer} title="Solution" />
    </div>
  );
}

// Number line for arithmetic visualization.
export function NumberLine({ min = -10, max = 10, marks = [], width = 500, height = 80, ticks = true }) {
  const span = max - min;
  const xOf = (n) => 30 + ((n - min) / span) * (width - 60);
  const allTicks = [];
  if (ticks) for (let i = min; i <= max; i++) allTicks.push(i);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="my-3 max-w-full">
      <line x1={20} y1={40} x2={width - 20} y2={40} stroke="#1e293b" strokeWidth={2} />
      <polygon points={`${width - 20},40 ${width - 28},35 ${width - 28},45`} fill="#1e293b" />
      <polygon points={`20,40 28,35 28,45`} fill="#1e293b" />
      {allTicks.map((n) => (
        <g key={n}>
          <line x1={xOf(n)} y1={36} x2={xOf(n)} y2={44} stroke="#475569" strokeWidth={1} />
          <text x={xOf(n)} y={60} textAnchor="middle" fontSize={11} fill="#475569" fontFamily="monospace">{n}</text>
        </g>
      ))}
      {marks.map((m, i) => (
        <g key={i}>
          <circle cx={xOf(m.x)} cy={40} r={6} fill={m.color || '#7c3aed'} />
          {m.label && <text x={xOf(m.x)} y={25} textAnchor="middle" fontSize={12} fontWeight="bold" fill={m.color || '#7c3aed'}>{m.label}</text>}
        </g>
      ))}
    </svg>
  );
}

// Coordinate plane — handy for graphing lines / points.
export function CoordPlane({ width = 360, height = 360, xMin = -6, xMax = 6, yMin = -6, yMax = 6, points = [], lines = [], curves = [] }) {
  const xSpan = xMax - xMin;
  const ySpan = yMax - yMin;
  const pad = 30;
  const xOf = (x) => pad + ((x - xMin) / xSpan) * (width - 2 * pad);
  const yOf = (y) => height - pad - ((y - yMin) / ySpan) * (height - 2 * pad);
  const grid = [];
  for (let i = xMin; i <= xMax; i++) grid.push({ axis: 'x', n: i });
  for (let j = yMin; j <= yMax; j++) grid.push({ axis: 'y', n: j });

  const linePts = (line) => {
    // y = mx + b form, or vertical x=c
    if (line.vertical != null) {
      return [
        [line.vertical, yMin],
        [line.vertical, yMax]
      ];
    }
    const ys = [yMin, yMax];
    const xs = ys.map((y) => (y - line.b) / line.m);
    return [
      [Math.max(xMin, Math.min(xMax, xs[0])), (Math.max(xMin, Math.min(xMax, xs[0]))) * line.m + line.b],
      [Math.max(xMin, Math.min(xMax, xs[1])), (Math.max(xMin, Math.min(xMax, xs[1]))) * line.m + line.b]
    ];
  };

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="my-3 max-w-full bg-white">
      {grid.map((g, i) => g.axis === 'x' ? (
        <line key={`gx${i}`} x1={xOf(g.n)} y1={pad} x2={xOf(g.n)} y2={height - pad} stroke="#e2e8f0" strokeWidth={g.n === 0 ? 0 : 1} />
      ) : (
        <line key={`gy${i}`} x1={pad} y1={yOf(g.n)} x2={width - pad} y2={yOf(g.n)} stroke="#e2e8f0" strokeWidth={g.n === 0 ? 0 : 1} />
      ))}
      <line x1={pad} y1={yOf(0)} x2={width - pad} y2={yOf(0)} stroke="#1e293b" strokeWidth={1.5} />
      <line x1={xOf(0)} y1={pad} x2={xOf(0)} y2={height - pad} stroke="#1e293b" strokeWidth={1.5} />
      {[xMin, xMax].map((n, i) => n !== 0 && (
        <text key={`xl${i}`} x={xOf(n)} y={yOf(0) + 14} fontSize={10} fill="#475569" textAnchor="middle">{n}</text>
      ))}
      {[yMin, yMax].map((n, i) => n !== 0 && (
        <text key={`yl${i}`} x={xOf(0) - 8} y={yOf(n) + 4} fontSize={10} fill="#475569" textAnchor="end">{n}</text>
      ))}
      <text x={width - pad - 4} y={yOf(0) + 14} fontSize={10} fill="#475569" textAnchor="end">x</text>
      <text x={xOf(0) + 6} y={pad + 8} fontSize={10} fill="#475569">y</text>

      {lines.map((line, i) => {
        const [[x1, y1], [x2, y2]] = linePts(line);
        return (
          <g key={`l${i}`}>
            <line x1={xOf(x1)} y1={yOf(y1)} x2={xOf(x2)} y2={yOf(y2)} stroke={line.color || '#7c3aed'} strokeWidth={2.5} />
            {line.label && <text x={xOf((x1 + x2) / 2)} y={yOf((y1 + y2) / 2) - 6} fontSize={11} fill={line.color || '#7c3aed'} fontWeight="bold">{line.label}</text>}
          </g>
        );
      })}

      {curves.map((c, i) => (
        <polyline
          key={`c${i}`}
          fill="none"
          stroke={c.color || '#0ea5e9'}
          strokeWidth={2.5}
          points={c.points.map((p) => `${xOf(p[0])},${yOf(p[1])}`).join(' ')}
        />
      ))}

      {points.map((p, i) => (
        <g key={`p${i}`}>
          <circle cx={xOf(p.x)} cy={yOf(p.y)} r={5} fill={p.color || '#dc2626'} />
          {p.label && (
            <text x={xOf(p.x) + 8} y={yOf(p.y) - 8} fontSize={11} fill={p.color || '#dc2626'} fontWeight="bold">{p.label}</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/* ----------------------------- Geometry helpers ----------------------------- */

export function Triangle({ width = 300, height = 200, type = 'right', sides = {}, angles = {} }) {
  // Right triangle by default. sides: {a, b, c}; angles: {A, B, C}
  const pad = 30;
  const W = width - 2 * pad;
  const H = height - 2 * pad;
  let pts;
  if (type === 'right') {
    pts = [[pad, height - pad], [pad + W, height - pad], [pad, pad]];
  } else if (type === 'isosceles') {
    pts = [[pad, height - pad], [pad + W, height - pad], [pad + W / 2, pad]];
  } else {
    pts = [[pad, height - pad], [pad + W, height - pad], [pad + W * 0.35, pad]];
  }
  const [P1, P2, P3] = pts;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="my-3 max-w-full">
      <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="#dbeafe" stroke="#1d4ed8" strokeWidth={2} />
      {type === 'right' && (
        <rect x={P1[0]} y={P1[1] - 14} width={14} height={14} fill="none" stroke="#1d4ed8" strokeWidth={1.5} />
      )}
      {sides.a && <text x={(P1[0] + P3[0]) / 2 - 12} y={(P1[1] + P3[1]) / 2} fontSize={12} fill="#1e40af" fontWeight="bold">{sides.a}</text>}
      {sides.b && <text x={(P1[0] + P2[0]) / 2} y={P1[1] + 16} fontSize={12} fill="#1e40af" fontWeight="bold" textAnchor="middle">{sides.b}</text>}
      {sides.c && <text x={(P2[0] + P3[0]) / 2 + 4} y={(P2[1] + P3[1]) / 2 - 4} fontSize={12} fill="#1e40af" fontWeight="bold">{sides.c}</text>}
      {angles.A && <text x={P1[0] + 22} y={P1[1] - 6} fontSize={11} fill="#7c3aed">{angles.A}</text>}
      {angles.B && <text x={P2[0] - 14} y={P2[1] - 6} fontSize={11} fill="#7c3aed">{angles.B}</text>}
      {angles.C && <text x={P3[0] + 6} y={P3[1] + 14} fontSize={11} fill="#7c3aed">{angles.C}</text>}
    </svg>
  );
}

export function Rectangle({ width = 280, height = 160, w = 'w', h = 'h', filled = true }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="my-3 max-w-full">
      <rect x={30} y={20} width={width - 60} height={height - 60} fill={filled ? '#dbeafe' : 'none'} stroke="#1d4ed8" strokeWidth={2} />
      <text x={width / 2} y={height - 8} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1e40af">{w}</text>
      <text x={10} y={height / 2} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1e40af" transform={`rotate(-90, 10, ${height / 2})`}>{h}</text>
    </svg>
  );
}

export function CircleFig({ radius = 'r', diameter, width = 240, height = 200 }) {
  const cx = width / 2, cy = height / 2;
  const r = 70;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="my-3 max-w-full">
      <circle cx={cx} cy={cy} r={r} fill="#dbeafe" stroke="#1d4ed8" strokeWidth={2} />
      <circle cx={cx} cy={cy} r={3} fill="#1d4ed8" />
      <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke="#dc2626" strokeWidth={2} />
      <text x={cx + r / 2} y={cy - 6} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#dc2626">{radius}</text>
      {diameter && (
        <>
          <line x1={cx - r} y1={cy + 30} x2={cx + r} y2={cy + 30} stroke="#7c3aed" strokeWidth={2} markerEnd="url(#arr)" markerStart="url(#arr)" />
          <text x={cx} y={cy + 26} textAnchor="middle" fontSize={11} fill="#7c3aed">{diameter}</text>
        </>
      )}
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed" />
        </marker>
      </defs>
    </svg>
  );
}

/* ----------------------------- Misc visuals ----------------------------- */

// Bar chart for data lessons.
export function BarChart({ data, title, width = 400, height = 220, color = '#0ea5e9' }) {
  const pad = 40;
  const max = Math.max(...data.map((d) => d.v));
  const bw = (width - 2 * pad) / data.length;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="my-3 max-w-full">
      {title && <text x={width / 2} y={16} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1e293b">{title}</text>}
      <line x1={pad} y1={pad} x2={pad} y2={height - pad} stroke="#475569" />
      <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="#475569" />
      {data.map((d, i) => {
        const h = ((d.v / max) * (height - 2 * pad - 10)) || 1;
        const x = pad + i * bw + bw * 0.15;
        const y = height - pad - h;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw * 0.7} height={h} fill={d.color || color} />
            <text x={x + bw * 0.35} y={y - 4} textAnchor="middle" fontSize={10} fill="#1e293b" fontWeight="bold">{d.v}</text>
            <text x={x + bw * 0.35} y={height - pad + 14} textAnchor="middle" fontSize={10} fill="#475569">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

// Simple grid for fraction/percent visuals.
export function FractionBar({ filled, total = 8, color = '#7c3aed' }) {
  const w = 280, h = 36;
  const cell = w / total;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="my-2 max-w-full">
      {Array.from({ length: total }).map((_, i) => (
        <rect key={i} x={i * cell} y={0} width={cell} height={h} fill={i < filled ? color : '#f1f5f9'} stroke="#cbd5e1" />
      ))}
    </svg>
  );
}

// Highlighted label for vocab/term.
export function Term({ children }) {
  return <span className="font-semibold text-slate-900 underline decoration-sky-400 decoration-2 underline-offset-2">{children}</span>;
}
