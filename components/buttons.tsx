"use client";

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import clsx from "clsx";

interface ButtonProps {
  label: string; // Label tombol
  href?: string; // Tujuan navigasi jika menggunakan Link
  onClick?: () => void; // Fungsi yang dijalankan ketika tombol diklik
  icon?: JSX.Element; // Ikon tombol
  type?: "submit" | "button"; // Tipe tombol (default: "button")
  variant?: "primary" | "secondary" | "danger"; // Variasi tombol untuk styling
  disabled?: boolean; // Status disabled
  className?: string; // Kelas tambahan
}

// Button Utama
export const Button = ({
  label,
  href,
  onClick,
  icon,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  // Styling berdasarkan variant
  const baseClass =
    "inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded focus:outline-none";
  const variantClass = clsx({
    "bg-blue-700 text-white hover:bg-blue-800": variant === "primary",
    "bg-gray-200 text-gray-700 hover:bg-gray-300": variant === "secondary",
    "bg-red-600 text-white hover:bg-red-700": variant === "danger",
  });
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClass = clsx(baseClass, variantClass, disabledClass, className);

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};
