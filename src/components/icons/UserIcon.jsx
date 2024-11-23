export default function UserIcon({ size = "30", color = "#202020" }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill={color} /><path fill={color} d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5" /></svg>
}