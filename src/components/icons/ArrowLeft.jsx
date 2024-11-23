export default function ArrowLeft({ size = "34", color = "#7E53D4" }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height="35" viewBox="0 0 34 35" fill="none">
    <g filter="url(#filter0_d_948_157)">
      <rect x="32.5" y="33" width="31" height="31" rx="15.5" transform="rotate(180 32.5 33)" stroke={color} shapeRendering="crispEdges" />
      <path d="M9.00002 17.5002H25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.9997 12.5C13.9997 12.5 8.99976 16.1824 8.99976 17.5C8.99976 18.8176 13.9998 22.5 13.9998 22.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <filter id="filter0_d_948_157" x="0" y="0.5" width={size} height={size} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.204123 0 0 0 0 0.204123 0 0 0 0 0.204123 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_948_157" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_948_157" result="shape" />
      </filter>
    </defs>
  </svg>
}