export default function Arrow1oClock({ size = "48", color = "#8F71E1" }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width={size} height={size} rx="24" fill={color} />
    <path d="M29 19L18 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 18.1315C23 18.1315 28.6335 17.6566 29.4885 18.5116C30.3434 19.3665 29.8684 25 29.8684 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}