/**
 * Animated top-down pickleball court (44ft × 20ft → 440 × 200 units).
 * Lines draw in on load, then a neon ball plays a looping rally with
 * landing ripples. Pure SVG/SMIL + CSS, no client JS.
 */

type Pt = [number, number];

// Rally: serve → return → third-shot drop → dink → put-away back to server.
const shots: { to: Pt; ctrl: Pt }[] = [
  { ctrl: [190, 60], to: [362, 58] },
  { ctrl: [230, 10], to: [82, 52] },
  { ctrl: [170, 120], to: [252, 142] },
  { ctrl: [222, 175], to: [186, 128] },
  { ctrl: [120, 210], to: [34, 150] },
];
const start: Pt = [34, 150];
const DURATION = 7.5;

function qLen(a: Pt, c: Pt, b: Pt) {
  let len = 0;
  let prev = a;
  for (let i = 1; i <= 24; i++) {
    const t = i / 24;
    const x = (1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t ** 2 * b[0];
    const y = (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t ** 2 * b[1];
    len += Math.hypot(x - prev[0], y - prev[1]);
    prev = [x, y];
  }
  return len;
}

const segLens: number[] = [];
let cursor = start;
let d = `M${start[0]} ${start[1]}`;
for (const s of shots) {
  segLens.push(qLen(cursor, s.ctrl, s.to));
  d += ` Q${s.ctrl[0]} ${s.ctrl[1]} ${s.to[0]} ${s.to[1]}`;
  cursor = s.to;
}
const total = segLens.reduce((a, b) => a + b, 0);
const keyPoints = [0, ...segLens.map((_, i) => segLens.slice(0, i + 1).reduce((a, b) => a + b, 0) / total)]
  .map((n) => n.toFixed(4))
  .join(";");
const keyTimes = shots.map((_, i) => (i / shots.length).toFixed(4)).concat("1").join(";");
// Ball "height": small at each bounce, larger mid-flight.
const rValues = ["4", ...shots.flatMap(() => ["8.5", "4"])].join(";");
const rTimes = ["0", ...shots.flatMap((_, i) => [((i + 0.5) / shots.length).toFixed(4), ((i + 1) / shots.length).toFixed(4)])].join(";");

export function HeroCourt() {
  return (
    <div className="hero-court" aria-hidden="true">
      <svg viewBox="-20 -20 480 240" className="hero-court-svg">
        <defs>
          <radialGradient id="kitchenGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#45C2CC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#45C2CC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="150" y="0" width="140" height="200" fill="url(#kitchenGlow)" className="kitchen-fill" />
        <g className="court-lines">
          <rect x="0" y="0" width="440" height="200" pathLength={1} />
          <line x1="150" y1="0" x2="150" y2="200" pathLength={1} />
          <line x1="290" y1="0" x2="290" y2="200" pathLength={1} />
          <line x1="0" y1="100" x2="150" y2="100" pathLength={1} />
          <line x1="290" y1="100" x2="440" y2="100" pathLength={1} />
        </g>
        <line x1="220" y1="-14" x2="220" y2="214" className="court-net" pathLength={1} />

        <path d={d} className="rally-path" />

        {shots.map((s, i) => (
          <circle key={i} cx={s.to[0]} cy={s.to[1]} r="2" className="ripple">
            <animate
              attributeName="r"
              values="2;16;16"
              keyTimes="0;0.14;1"
              dur={`${DURATION}s`}
              begin={`${((i + 1) * DURATION) / shots.length + 1.6}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.9;0;0"
              keyTimes="0;0.14;1"
              dur={`${DURATION}s`}
              begin={`${((i + 1) * DURATION) / shots.length + 1.6}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <g className="rally-ball">
          <circle r="4" className="ball-core">
            <animate attributeName="r" values={rValues} keyTimes={rTimes} dur={`${DURATION}s`} begin="1.6s" repeatCount="indefinite" />
          </circle>
          <animateMotion
            path={d}
            dur={`${DURATION}s`}
            begin="1.6s"
            repeatCount="indefinite"
            keyPoints={keyPoints}
            keyTimes={keyTimes}
            calcMode="linear"
          />
        </g>
      </svg>
    </div>
  );
}
