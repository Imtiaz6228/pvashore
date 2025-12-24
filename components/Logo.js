export default function Logo() {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-8"
    >
      {/* Background wave effect */}
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Wave background */}
      <path
        d="M0 20 Q45 5 90 20 Q135 35 180 20 L180 40 L0 40 Z"
        fill="url(#waveGradient)"
        opacity="0.1"
      />

      {/* PVA Text */}
      <text
        x="10"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="#1e40af"
      >
        PVA
      </text>

      {/* Shore Text */}
      <text
        x="48"
        y="28"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="300"
        fill="#7c3aed"
      >
        shore
      </text>

      {/* Decorative dot */}
      <circle
        cx="165"
        cy="25"
        r="3"
        fill="#2563eb"
      />

      {/* Small accent line */}
      <line
        x1="155"
        y1="25"
        x2="162"
        y2="25"
        stroke="#7c3aed"
        strokeWidth="1"
      />
    </svg>
  )
}
