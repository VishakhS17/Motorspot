"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { GalleryModal } from "./GalleryModal";

type GalleryGridProps = {
  images: readonly string[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = useCallback((index: number) => setModalIndex(index), []);
  const closeModal = useCallback(() => setModalIndex(null), []);

  const goPrev = useCallback(() => {
    setModalIndex((i) => (i === null ? null : i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setModalIndex((i) => (i === null ? null : i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openModal(i)}
            className="block w-full aspect-[3/2] relative overflow-hidden rounded cursor-pointer group"
          >
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-400"
            />
          </button>
        ))}
      </div>
      <GalleryModal
        images={images}
        currentIndex={modalIndex ?? 0}
        isOpen={modalIndex !== null}
        onClose={closeModal}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
}
