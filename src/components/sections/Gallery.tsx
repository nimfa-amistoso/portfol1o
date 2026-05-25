"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/img/WF-1.png",
  "/img/WF-2.png",
  "/img/WF-3.png",
  "/img/WF-4.png",
  "/img/WF-5.png",
  "/img/WF-6.png",
  "/img/WF-7.png",
  "/img/WF-8.png",
  "/img/WF-9.png",
  "/img/WF-10.png",
  "/img/WF-11.png",
  "/img/WF-12.png",
  "/img/WF-13.png",
  "/img/WF-14.png",
  "/img/WF-15.png",
];

const TOTAL = images.length;
const VISIBLE = 5;

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const maxStart = Math.max(0, TOTAL - VISIBLE);

  function prevStrip() {
    setStartIndex((i) => (i <= 0 ? maxStart : i - 1));
  }

  function nextStrip() {
    setStartIndex((i) => (i >= maxStart ? 0 : i + 1));
  }

  function openLightbox(i: number) {
    setLightboxIndex(i);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevLight() {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + TOTAL) % TOTAL));
  }

  function nextLight() {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % TOTAL));
  }

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLight();
      if (e.key === "ArrowRight") nextLight();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      <section id="gallery" className="border-b pt-2 pb-12 md:pt-3 md:pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
            Gallery
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevStrip}
              aria-label="Previous gallery items"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="grid flex-1 grid-cols-5 gap-2">
              {Array.from({ length: VISIBLE }, (_, offset) => {
                const i = startIndex + offset;
                const img = images[i];
                return (
                  <Card
                    key={i}
                    className="aspect-square cursor-zoom-in overflow-hidden transition hover:ring-2 hover:ring-primary"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={img}
                      alt={`Gallery image ${i + 1}`}
                      className="h-full w-full object-cover transition duration-200 hover:scale-105"
                    />
                  </Card>
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextStrip}
              aria-label="Next gallery items"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Counter */}
          <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {lightboxIndex + 1} / {TOTAL}
          </span>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevLight(); }}
            aria-label="Previous image"
            className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] select-none rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextLight(); }}
            aria-label="Next image"
            className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}