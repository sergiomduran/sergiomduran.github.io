// src/hooks/useActiveSection.js
import { useEffect, useState } from "react";

/**
 * Hook robusto para marcar la sección activa por id.
 * - Observa el elemento y actualiza `activeId` cuando entra en viewport.
 * - No toca classList si el nodo no existe.
 * - No accede a document/window fuera de efectos.
 */
export default function useActiveSection(ids = [], options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (!Array.isArray(ids) || ids.length === 0) return;

    // Crea el observer con opciones razonables
    const observer = new IntersectionObserver(
      (entries) => {
        // Busca la entrada más visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target?.id || null;
          if (id && id !== activeId) setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px", // dispara cuando el elemento cruza la mitad superior
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      }
    );

    // Atacha el observer a cada id, solo si el nodo existe
    const nodes = ids
      .map((id) => (typeof document !== "undefined" ? document.getElementById(id) : null))
      .filter(Boolean);

    nodes.forEach((node) => {
      try {
        observer.observe(node);
      } catch (_) {
        /* noop */
      }
    });

    return () => {
      try {
        observer.disconnect();
      } catch (_) {
        /* noop */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(ids)]); // dependemos de la lista de ids, no de activeId

  return activeId;
}
