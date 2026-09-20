export default function StackIllustration() {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm"
    >
      <defs>
        <linearGradient id="layerA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="layerB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="layerC" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* bottom layer */}
      <g opacity="0.95">
        <polygon points="180,250 300,290 180,330 60,290" fill="url(#layerC)" />
        <polygon points="60,290 60,300 180,340 180,330" fill="#4f46e5" />
        <polygon points="300,290 300,300 180,340 180,330" fill="#5b21b6" />
      </g>

      {/* middle layer */}
      <g opacity="0.97">
        <polygon points="180,170 300,210 180,250 60,210" fill="url(#layerB)" />
        <polygon points="60,210 60,220 180,260 180,250" fill="#be185d" />
        <polygon points="300,210 300,220 180,260 180,250" fill="#6d28d9" />
        <circle cx="180" cy="210" r="22" fill="white" opacity="0.15" />
      </g>

      {/* top layer */}
      <g>
        <polygon points="180,90 300,130 180,170 60,130" fill="url(#layerA)" />
        <polygon points="60,130 60,140 180,180 180,170" fill="#c2410c" />
        <polygon points="300,130 300,140 180,180 180,170" fill="#be185d" />
        <rect x="150" y="105" width="60" height="35" rx="6" fill="white" opacity="0.18" />
      </g>

      {/* floating chips */}
      <circle cx="95" cy="95" r="7" fill="#f97316" />
      <circle cx="270" cy="80" r="5" fill="#8b5cf6" />
      <circle cx="290" cy="180" r="6" fill="#ec4899" />
      <circle cx="70" cy="230" r="5" fill="#6366f1" />
    </svg>
  );
}
