// src/components/ProfileAvatar.jsx
import { Link } from "react-router-dom";

const sizeMap = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export default function ProfileAvatar({
  to = "/about",
  src = "/images/IMG_20241026_151139_671_20241026_172205_00009.jpg",
  alt = "Sergio Morales",
  size = "md",
  ring = true,
  className = "",
}) {
  return (
    <Link to={to} className={`inline-block ${className}`} aria-label="Ir a About">
      <img
        src={src}
        alt={alt}
        className={`${sizeMap[size]} object-cover rounded-full ${
          ring ? "border-2 border-gray-200 dark:border-gray-700 shadow" : ""
        }`}
        width="96"
        height="96"
        loading="lazy"
        decoding="async"
      />
    </Link>
  );
}
