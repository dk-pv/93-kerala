"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK = "/images/placeholder.jpg";

/** next/image that swaps to a local branded placeholder if the source fails to load. */
export default function Img({ src, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  return <Image {...props} src={failed ? FALLBACK : src} alt={alt} onError={() => setFailed(true)} />;
}
