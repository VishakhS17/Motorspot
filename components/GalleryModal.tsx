"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryModalProps = {
  images: readonly string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function GalleryModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: GalleryModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95"
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label="Gallery viewer"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-4xl text-motorspot-text hover:text-motorspot-accent transition-colors z-10"
        aria-label="Close"
      >
        ×
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl text-motorspot-text hover:text-motorspot-accent transition-colors z-10"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl text-motorspot-text hover:text-motorspot-accent transition-colors z-10"
        aria-label="Next image"
      >
        ›
      </button>
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Project ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
}
