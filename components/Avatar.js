"use client";
import { useState } from "react";

export default function Avatar({ src = "/images/antony.jpg", alt = "Antony Mwandiki", variant = "small" }) {
  const [bad, setBad] = useState(false);
  const big = variant === "portrait";
  const cls = big ? "portrait" : "avatar";
  if (bad) return <div className={cls} aria-label={alt}>AM</div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={cls} src={src} alt={alt} width={big ? 400 : 84} height={big ? 500 : 84} onError={() => setBad(true)} />;
}