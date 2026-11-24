"use client";
import { useEffect, useRef, useState } from "react";

/** Detects a broken image even if it failed before React hydrated. */
export function useImgFallback() {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return { ref, failed, onError: () => setFailed(true) };
}
