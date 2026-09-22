# Canvas Draw App: Competitor Research

**Date:** 2026-09-22

This research compares products adjacent to a lightweight pencil-and-eraser canvas. The closest references span three positions:

- **Focused painting:** Kleki, Sketchpad
- **Hand-drawn diagramming:** Excalidraw
- **Extensible or collaborative canvas platforms:** tldraw, Magma

## Main findings

1. A simple canvas can win on immediacy. The larger products expose more tools, but that increases cognitive load.
2. Drawing quality is a product surface. Brush feel, pointer/touch behavior, pressure sensitivity, and eraser behavior are worth treating as core interaction design.
3. Export and recovery become important early. PNG export and undo/redo are likely more valuable next steps than decorative features.
4. Extensibility should be structural before it is visible. Keep tool state, stroke rendering, and canvas persistence separate so more tools can be added later.
5. Collaboration is a separate product direction. Real-time shared drawing requires a stroke/event model, synchronization, identity, and session lifecycle.

## Competitor files

- [tldraw](../research/tldraw.md)
- [Excalidraw](../research/excalidraw.md)
- [Kleki](../research/kleki.md)
- [Magma](../research/magma.md)
- [Sketchpad](../research/sketchpad.md)
